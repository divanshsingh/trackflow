import prisma from "../lib/prisma.js";
import { nanoid } from "nanoid"


export const createProjectService =  async ({ name, domain }, userId) => {
    const existingProject = await prisma.project.findUnique({
        where: {
            domain,
        }
    })

    if(existingProject){
        throw new Error("Project with this domain already exists");        
    }

    const apiKey = `tf_${nanoid(24)}`
    const project = prisma.project.create({
        data:{
            name,
            domain,
            apiKey,
            userId,            
        }
    })
    return project
}

export const getProjectService = async (userId) => {
    const projects = await prisma.project.findMany({
        where: {
            userId,
        }
    });

    const projectsWithStatus = await Promise.all(
        projects.map(async (project) => {
            const totalPageViews = await prisma.pageView.count({
                where: {
                    session: {
                        projectId: project.id,
                    },
                },
            })
            return {
                ...project,
                trackingStatus: totalPageViews > 0,
            };
        })
    )
    return projectsWithStatus;
}

export const getProjectByIdService = async (projectId, userId) => {
    const project = await prisma.project.findFirst({
        where: {
            id: Number(projectId),
            userId,
        }
    })
    if (!project) {
        throw new Error("Project not found");
    }  
    return project;  
}

export const updateProjectService = async (projectId, userId, { name, domain }) => {
    const project = await prisma.project.findFirst({
        where:{
            id: Number(projectId),
            userId
        }
    })
    if (!project) {
        throw new Error("Project not found");
    } 
    if(domain && domain !== project.domain){
        const existingProject = await prisma.project.findUnique({
            where:{
                domain,
            }
        })
        if(existingProject){
            throw new Error("Domain already exists");            
        }
    }  
    
    const updatedProject = await prisma.project.update({
        where: {
            id: Number(projectId),
        },
        data: {
            name,
            domain,
        },
    })

    return updatedProject;
}

export const deleteProjectService = async (projectId, userId) => {
    const project = await prisma.project.findFirst({
        where:{
            id: Number(projectId),
            userId,
        }
    })
    if (!project) {
        throw new Error("Project not found");
    }    
    await prisma.project.delete({
        where: {
            id: Number(projectId),
        },
    });
    return; 
}