import configConnection from "../config";

import mysql, { Connection } from "mysql";

export const dbService = {
  runSQL,
};

const connection: Connection = mysql.createConnection(configConnection);

connection.connect((error: Error) => {
  if (error) {
    throw new Error("mySql failed connection");
  }

  console.log("connected to SQL server");
});

function runSQL(sqlCommand: string) {
  return new Promise((resolve, reject) => {
    connection.query(sqlCommand, function (error: Error, results: any) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}
