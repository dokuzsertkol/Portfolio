export interface project {
    title: string;
    keywords: string;
    imageUrl: string;
    href: string;
}

export const projects: Record<string, project> = {
    portfolio: {
        title: "Portfolio Website",
        keywords: "Next.js, Tailwind CSS, TypeScript",
        imageUrl: "/projects/portfolio.png",
        href: ""
    },
    flowerforall: {
        title: "FlowerForAll",
        keywords: "Node.js, React.js, MongoDB, Docker, AWS",
        imageUrl: "/projects/flowerforall.png",
        href: ""
    },
    announcementapi: {
        title: "Announcement API",
        keywords: "ASP.NET Core, SQL Server, JWT Auth",
        imageUrl: "/projects/announcementapi.png",
        href: ""
    },
    howtodo: {
        title: "HowToDo Website",
        keywords: "ASP.NET Core MVC, Entity Framework Core, SQL Server",
        imageUrl: "/projects/howtodo.png",
        href: ""
    },
    hotelmanagement: {
        title: "Hotel Management System",
        keywords: ".NET WinForms, MSSQL, SQL Server",
        imageUrl: "/projects/hotelmanagement.png",
        href: ""
    }
};
