import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('knowledge')
export default class Knowledge {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    type: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    image_url: string;

    @Column()
    about_link: string;

    @Column()
    language: string;
};
