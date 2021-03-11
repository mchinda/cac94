import {IDBTypeORM} from "./i.db.type.orm"

export interface IEnvironmentConfig {
  db: IDBTypeORM;
  httpPort: number;
  wsPort: number;
  jwtSecret: string;
  domain: string;
  httpProtocol: string;
  wsProtocol: string;
}
