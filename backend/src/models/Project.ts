import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from '../models/Image';

@Entity('projects')
export default class Project {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column() 
    objective: string;

    @Column()
    difficulties: string;

    @Column()
    acquirements: string;

    @Column()
    code_link: string;

    @Column()
    website_link: string;

    @Column()
    banner_image: string;

    @Column()
    banner_gif: string;

    @Column() 
    language: string;

    @OneToMany(_ => Image, image => image.project, {
        cascade: ['insert', 'update', 'remove'],
    })
    @JoinColumn({ name: 'project_id' })
    images: Image[];
};
