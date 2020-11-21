import Knowledge from '../models/Knowledge';

export default {
    render(knowledge: Knowledge) {
        return {
            id: knowledge.id,
            name: knowledge.name,
            description: knowledge.description,
            about_link: knowledge.about_link,
            image_url: knowledge.image_url,
            type: knowledge.type,
        };
    },

    renderMany(knowledgeArray: Knowledge[]) {
        return knowledgeArray.map(knowledge => this.render(knowledge));
    },
};
