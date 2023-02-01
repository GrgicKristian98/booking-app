import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
export class Session extends Model {

    @Column
    day: string;

    @Column
    open: boolean;

    @Column
    start_time: string;

    @Column
    end_time: string;

    @Column
    client_email: string;

    @Column
    client_name: string;
    
}