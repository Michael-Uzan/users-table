import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "exam",
  // insecureAuth: true,
});

connection.connect((error: Error) => {
  if (error) throw new Error("mySql failed connection");
  console.log("connected to SQL server");
});

function runSQL(sqlCommand: string) {
  return new Promise((resolve, reject) => {
    connection.query(sqlCommand, function (error: Error, results: any) {
      if (error) reject(error);
      else resolve(results);
    });
  });
}

export const dbService = {
  runSQL,
};

// connection.end();
