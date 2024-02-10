import prodConnection from "./prod";
import devConection from "./dev";

interface IConfigConnection {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

let configConnection: IConfigConnection;

// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === "production") {
  // we are in production - return the prod set of keys
  configConnection = prodConnection;
} else {
  // we are in development - return the dev keys!!!
  configConnection = devConection;
}

export default configConnection;
