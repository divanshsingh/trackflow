import prisma from "../lib/prisma.js";
import { v4 as uuidv4} from 'uuid';

export const trackVisitorService = async ({ apiKey, path, title, referrer, visitorId}) => {
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

    if(!visitorId){[
        const visitorId = 
    ]}
      return { project, path, title, referrer };
}