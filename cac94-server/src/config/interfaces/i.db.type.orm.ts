export interface IDBTypeORM{
    type:string;
    host:string;
    database:string;
    entities:string[];
    synchronize:boolean;
    port?:number;
    username?:string;
    password?:string;
}
