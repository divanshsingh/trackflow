import prisma from "../lib/prisma.js";

export const trackVisitorService = async ({ apiKey, path, title, referrer}) => {
    const project = await prisma.project.findUnique({
        where:{
            apiKey,
        }
    })
    if (!project) {
        throw new Error("Invalid API Key");
    }  
      return { project, path, title, referrer };
}