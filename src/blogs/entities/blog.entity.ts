import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    public id!: string; 

    @Column({type: 'varchar', length: 225})
    public title: string; 
    
    
    public description: string; 
    
    
    public body: string; 

    @Column({type: 'varchar', length: 120})
    public author: string; 
    
    @CreateDateColumn({type: 'timestamp'})
    public date_posted: Date; 

    @UpdateDateColumn({type: 'timestamp'})
    public date_updated: Date; 
}

