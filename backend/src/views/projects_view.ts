import Project from '../models/Project';

export default {
    render(project: Project) {
        return {
            id: project.id,
            name: project.name,
            description: project.description,
            objective: project.objective,
            difficulties: project.difficulties,
            acquirements: project.acquirements,
            website_link: project.website_link,
            code_link: project.code_link,
            images: project.images,
            banner_image: project.banner_image,
            banner_gif: project.banner_gif,
        };
    },

    renderMany(projects: Project[]) {
        return projects.map(project => this.render(project));
    },
};
