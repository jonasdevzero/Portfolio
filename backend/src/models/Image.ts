import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Project from '../models/Project';

@Entity('images')
export default class Images {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(_ => Project, project => project.images)
    @JoinColumn({ name: 'project_id' })
    project: Project;
};
