import {createConnection} from 'typeorm';

export const  connection=async()=> await createConnection({
  database:"typestack",
  entities:[__dirname+"/*/*/*.entity.ts"],
  synchronize:true,
  host:"localhost",
  port:5432,
  username:"postgres",
  password:"Love@2018",
  type:'postgres',logging:true
});