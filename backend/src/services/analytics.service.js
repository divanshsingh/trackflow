import prisma from "../lib/prisma.js"

const formatTrafficSource = (referrer) => {

    if (!referrer || referrer.trim() === "") return "Direct";

    const value = referrer.toLowerCase();

    if (value.includes("google")) return "Google";

    if (value.includes("linkedin")) return "LinkedIn";

    if (value.includes("twitter") || value.includes("x.com")) return "Twitter";

    if (value.includes("facebook")) return "Facebook";

    if (value.includes("github")) return "GitHub";

    if (value.includes("youtube")) return "YouTube";

    return "Other";

};

export const getDashboardOverviewService = async (userId) => {
    // Get all user's projects
    const projects = await prisma.project.findMany({
        where: {
            userId,
        },
        select: {
            id: true,
        },
    });
    if (projects.length === 0) {
        return {
            totalProjects: 0,
            totalVisitors: 0,
            totalSessions: 0,
            totalPageViews: 0,
            averagePagesPerSession: 0,
            trackingStatus: false,
        };
    }
    const projectIds = projects.map(project => project.id);
    // Total Visitors
    const totalVisitors = await prisma.visitor.count({
        where: {
            projectId: {
                in: projectIds,
            },
        },
    });
    // Total Sessions
    const totalSessions = await prisma.session.count({
        where: {
            projectId: {
                in: projectIds,
            },
        },
    });
    // Total Page Views
    const totalPageViews = await prisma.pageView.count({
        where: {
            session: {
                projectId: {
                    in: projectIds,
                },
            },
        },
    });
    const averagePagesPerSession =
        totalSessions === 0
            ? 0
            : Number((totalPageViews / totalSessions).toFixed(2));
    return {
        totalProjects: projects.length,
        totalVisitors,
        totalSessions,
        totalPageViews,
        averagePagesPerSession,
        trackingStatus: totalPageViews > 0,
    };
};

export const getAnalyticsOverviewService = async (projectId, userId) => {
    const project = await prisma.project.findFirst({
        where: {
            id: Number(projectId),
            userId
        }
    })
    if (!project) {
        throw new Error("Project not found");
    }  

//  Total Visitors
    const totalVisitors = await prisma.visitor.count({
        where: {
            projectId: project.id,
        },
    });  

//  Total Sessions
    const totalSessions = await prisma.session.count({
        where: {
            projectId: project.id,
        },
    }); 

//  Total Page Views
    const totalPageViews = await prisma.pageView.count({
        where: {
            session: {
                projectId: project.id,
            },
        },
    }); 

//  Average Pages Per Session
    const averagePagesPerSession =
        totalSessions === 0 ? 0 : Number((totalPageViews / totalSessions).toFixed(2));    
        
    const trackingStatus = totalPageViews > 0;
    
    return {
        totalVisitors,
        totalSessions,
        totalPageViews,
        averagePagesPerSession,
        trackingStatus,
    };
}

export const getTopPagesService = async (projectId, userId) => {
    const project = await prisma.project.findFirst({
        where: {
            id: Number(projectId),
            userId,
        }  
    })
    if (!project) {
        throw new Error("Project not found");
    }
    const pages = await prisma.pageView.groupBy({
        by: ["path"],
        where: {
            session: {
                projectId: project.id
            },
        },
        _count: {
            path: true
        },
        orderBy: {
            _count: {
                path: "desc",
            },            
        },
        take: 10,
    })  
    
    return pages.map((page) => ({
    path: page.path,
    views: page._count.path,
}));
}

// SELECT
// path,
// COUNT(path)
// FROM PageView
// GROUP BY path
// ORDER BY COUNT(path) DESC
// LIMIT 10;

export const getVisitorTrendService = async (projectId, userId) => {
    const project = await prisma.project.findFirst({
        where:{
            id: Number(projectId),
            userId,
        }
    })
    if (!project) {
        throw new Error("Project not found");
    }
    const visitors = await prisma.visitor.findMany({
        where: {
            projectId: project.id,
        },
        select: {
            firstSeen: true,
        },        
    })
    
    const trend = {}
    visitors.forEach((visitor) => {
        const date = visitor.firstSeen.toISOString().split("T")[0];
        trend[date] = (trend[date] || 0) + 1;
    })

    return Object.entries(trend).map(([date, visitors]) => ({
    date, visitors,
    }));
}

export const getReferrersService = async (projectId, userId) => {
    const project = await prisma.project.findFirst({
        where:{
            id: Number(projectId),
            userId,
        }
    })
    if (!project) {
        throw new Error("Project not found");
    }
    const referrers = await prisma.session.groupBy({
        by: ["referrer"],
        where: {
            projectId: project.id,
        },
        _count: {
            referrer: true,
        },
        orderBy: {
            _count: {
                referrer: "desc",
            }
        },
        take: 10,
    })  
    const totalVisits = referrers.reduce(
    (sum, referrer) => sum + referrer._count.referrer, 0
    );
    return referrers.map((referrer) => ({
        source: formatTrafficSource(referrer.referrer),
        percentage:
        totalVisits === 0
            ? 0
            : Math.round(
                  (referrer._count.referrer / totalVisits) * 100
              ),
    }));    
}

export const getBrowserStatsService = async (projectId, userId) => {
    const project = await prisma.project.findFirst({
        where: {
            id: Number(projectId),
            userId,
        },
    });
    if (!project) {
        throw new Error("Project not found");
    }
    const browsers = await prisma.session.groupBy({
        by: ["browser"],
        where: {
            projectId: project.id,
        },
        _count: {
            browser: true,
        },
        orderBy: {
            _count: {
                browser: "desc",
            },
        },
    });
    return browsers.map((browser) => ({
        browser: browser.browser,
        users: browser._count.browser,
    }));
};

export const getDeviceStatsService = async (projectId, userId) => {
    const project = await prisma.project.findFirst({
        where: {
            id: Number(projectId),
            userId,
        },
    });
    if (!project) {
        throw new Error("Project not found");
    }
    const devices = await prisma.session.groupBy({
        by: ["device"],
        where: {
            projectId: project.id,
        },
        _count: {
            device: true,
        },
        orderBy: {
            _count: {
                device: "desc",
            },
        },
    });
    const totalUsers = devices.reduce( (sum, device) => sum + device._count.device, 0 );
    return devices.map((device) => ({
        device: device.device,
        percentage: Math.round((device._count.device / totalUsers) * 100 ),
    }));
};

export const getOSStatsService = async (projectId, userId) => {
    const project = await prisma.project.findFirst({
        where: {
            id: Number(projectId),
            userId,
        },
    });
    if (!project) {
        throw new Error("Project not found");
    }

    const operatingSystems = await prisma.session.groupBy({
        by: ["os"],
        where: {
            projectId: project.id,
        },
        _count: {
            os: true,
        },
        orderBy: {
            _count: {
                os: "desc",
            },
        },
    });
    return operatingSystems.map((os) => ({
        os: os.os,
        users: os._count.os,
    }));
};