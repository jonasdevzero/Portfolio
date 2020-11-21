import Project from '../models/Project';

export default {
    render(project: Project) {
        return {
            id: project.id,
            name: project.name,
            description: project.description,
            about_link: project.about_link,
            source_link: project.source_link,
            images: project.images,
            banner_image: project.banner_image,
        };
    },

    renderMany(projects: Project[]) {
        return projects.map(project => this.render(project));
    },
};
