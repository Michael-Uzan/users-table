import { IUser } from "../interface/IUser";
import { dbService } from "../services/db.service";

export const usersService = {
  query,
  getById,
  add,
  update,
  remove,
};

function query(criteria: { name?: string } = {}) {
  const namePart = criteria?.name || "";
  // const query = `SELECT * FROM users`;
  const sqlCmd = `SELECT * FROM users WHERE users.fullName LIKE '%${namePart}%'`;
  //   var query = `SELECT * FROM users WHERE users.fulNname LIKE '%${namePart}%' OR bug.description LIKE '%${namePart}%'`;

  return dbService.runSQL(sqlCmd);
}

async function getById(userId: number) {
  const sqlCmd = `SELECT * FROM users WHERE users.id = ${userId}`;

  const users: IUser[] = (await dbService.runSQL(sqlCmd)) as IUser[];
  if (users.length === 1) return users[0];
  throw new Error(`user id ${userId} not found`);
}

function add(user: IUser) {
  const sqlCmd = `INSERT INTO users (fullName, country, city, email, phoneNumber, jobTitle, yearsOfExperince) VALUES ("${user.fullName}", "${user.country}", "${user.city}", "${user.email}", "${user.phoneNumber}", "${user.jobTitle}", "${user.yearsOfExperince}" )`;

  return dbService.runSQL(sqlCmd);
}

async function update({
  id,
  fullName,
  country,
  city,
  email,
  phoneNumber,
  jobTitle,
  yearsOfExperince,
}: IUser) {
  const sqlCmd = `UPDATE users SET fullName = "${fullName}", country = "${country}", city = "${city}", email = "${email}", phoneNumber = "${phoneNumber}", jobTitle = "${jobTitle}", yearsOfExperince = "${yearsOfExperince}" WHERE users.id = ${id}`;

  const okPacket: any = await dbService.runSQL(sqlCmd);
  if (okPacket.affectedRows !== 0) return okPacket;
  throw new Error(`No user updated - user id ${id}`);
}

function remove(userId: number) {
  const sqlCmd = `DELETE FROM users WHERE users.id = ${userId}`;

  return dbService
    .runSQL(sqlCmd)
    .then((okPacket: any) =>
      okPacket.affectedRows === 1
        ? okPacket
        : Promise.reject(new Error(`No user deleted - user id ${userId}`))
    );
}
