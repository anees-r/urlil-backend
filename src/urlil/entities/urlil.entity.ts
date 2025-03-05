import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Urlil {
    @PrimaryGeneratedColumn('uuid')
    id: number;
    
    @Column({ nullable: false })
    url: string;

    @Column({ unique: true })
    shorturl: string;

    @CreateDateColumn()
    createdAt: Date;
}
