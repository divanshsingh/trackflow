import prisma from "../lib/prisma.js";
import { v4 as uuidv4} from 'uuid';

export const trackService = async ({ apiKey, path, title, referrer, visitorId, sessionId}) => {
    // 1. Find Project
    const project = await prisma.project.findUnique({
        where:{
            apiKey,
        }
    })
    if (!project) {
        throw new Error("Invalid API Key");
    }  

    let visitor;
    let isNewVisitor = false;

    if(!visitorId){
        const newVisitorId = uuidv4();
        visitor = await prisma.visitor.create({
                data:{
                    visitorId: newVisitorId,
                    projectId: project.id,
                }
        })
    isNewVisitor = true;    
    } else {
        visitor = await prisma.visitor.findFirst({
            where: {
                visitorId,
                projectId: project.id,
            }
        })

        if(!visitor){
            visitor = await prisma.visitor.create({
                data: {
                    visitorId,
                    projectId: project.id,
                },
            });
            isNewVisitor = true;            
        }

        else {
            visitor = await prisma.visitor.update({
                where: {
                    id: visitor.id,
                },
                data: {
                    lastSeen: new Date(),
                },
            });
        }        
    }

    let session;
    let isNewSession = false;

    if(!sessionId){
        const newSessionId = uuidv4();
        session = await prisma.session.create({
            data: {
            sessionId: newSessionId,
            visitorId: visitor.id,
            projectId: project.id,
            browser: "Unknown",
            device: "Unknown",
            os: "Unknown",
            referrer,
        },
        })
        isNewSession = true;
    } else {
            session = await prisma.session.findFirst({
        where: {
            sessionId,
            projectId: project.id,
        },
    });
    if (!session) {
        const newSessionId = uuidv4();
        session = await prisma.session.create({
            data: {
                sessionId: newSessionId,
                visitorId: visitor.id,
                projectId: project.id,
                browser: "Unknown",
                device: "Unknown",
                os: "Unknown",
                referrer,
            },
        });
        isNewSession = true;
    } 
        }
        const pageView = await prisma.pageView.create({
        data: {
            sessionId: session.id,
            path,
            title,
        },        
        })
      return {
    project,
    visitor,
    session,
    pageView,
    isNewVisitor,
    isNewSession,
};
}