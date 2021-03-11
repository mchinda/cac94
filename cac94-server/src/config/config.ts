import { extractKey } from './../utilities/keys';
import {IConfig} from "./interfaces/i.config";
import {join} from "path";

export class Config{

    static slugify = {
      replacement: '-',
      lower: true,
    }
    static development = {
      db: {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            //password: 'root',
            password: '@Frocentrique78210',
            database: 'mda_db',
            entities: [join(__dirname, '**/**.entity{.ts,.js}')],
            synchronize: true,
      },
      httpPort: 1337,
      wsPort: 1338,
      jwtSecret:extractKey(`${process.cwd()}/keys/jwt.private.key`),
      domain: 'localhost',
      httpProtocol: 'http',
      wsProtocol: 'ws'
    };
    static production = {
      rootPath : process.cwd(),
      db: {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '@Frocentrique78210',
            //password: 'root',
            database: 'mda_db',
            entities: [join(__dirname, 'modules/**/**.entity{.ts,.js}')],
            synchronize: true,
      },
      httpPort: +process.env.HTTP_SERVER_PORT,
      wsPort: +process.env.WS_PORT,
      jwtSecret: process.env.JWT_SECRET,
      domain: process.env.DOMAIN,
      httpProtocol: process.env.HTTP_PROTOCOL,
      wsProtocol: process.env.WS_PROTOCOL
    };

}
