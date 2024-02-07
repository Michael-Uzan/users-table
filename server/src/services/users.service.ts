import { dbService } from "./db.service";

function query(criteria: { name?: string } = {}) {
  const namePart = criteria?.name || "";
  const query = `SELECT * FROM users`;
  //   const query = `SELECT * FROM users WHERE users.fullNname LIKE '%${namePart}%'`;
  //   var query = `SELECT * FROM users WHERE users.fulNname LIKE '%${namePart}%' OR bug.description LIKE '%${namePart}%'`;

  return dbService.runSQL(query);
}

export const usersService = {
  query,
  // getById,
  // add,
  // update,
  // remove
};
