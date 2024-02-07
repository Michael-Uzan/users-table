"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersService = void 0;
const db_service_1 = require("../services/db.service");
exports.usersService = {
    query,
    getById,
    add,
    update,
    remove,
};
function query(criteria = {}) {
    const namePart = (criteria === null || criteria === void 0 ? void 0 : criteria.name) || "";
    // const query = `SELECT * FROM users`;
    const sqlCmd = `SELECT * FROM users WHERE users.fullName LIKE '%${namePart}%'`;
    //   var query = `SELECT * FROM users WHERE users.fulNname LIKE '%${namePart}%' OR bug.description LIKE '%${namePart}%'`;
    return db_service_1.dbService.runSQL(sqlCmd);
}
function getById(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlCmd = `SELECT * FROM users WHERE users.id = ${userId}`;
        const users = (yield db_service_1.dbService.runSQL(sqlCmd));
        if (users.length === 1)
            return users[0];
        throw new Error(`user id ${userId} not found`);
    });
}
function add(user) {
    const sqlCmd = `INSERT INTO users (fullName, country, city, email, phoneNumber, jobTitle, yearsOfExperience)
              VALUES ("${user.fullName}",
                      "${user.country}",
                      "${user.city}",
                      "${user.email}",
                      "${user.phoneNumber}",
                      "${user.jobTitle}",
                      "${user.yearsOfExperience}",
                      )`;
    return db_service_1.dbService.runSQL(sqlCmd);
}
function update({ id, fullName, country, city, email, phoneNumber, jobTitle, yearsOfExperience, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const sqlCmd = `UPDATE user set
  fullName = "${fullName}",
  country = "${country}",
  city = ${city},
  email = ${email},
  phoneNumber = ${phoneNumber},
  jobTitle = ${jobTitle},
  yearsOfExperience = ${yearsOfExperience}
  WHERE bug.id = ${id}`;
        const okPacket = yield db_service_1.dbService.runSQL(sqlCmd);
        if (okPacket.affectedRows !== 0)
            return okPacket;
        throw new Error(`No user updated - user id ${id}`);
    });
}
function remove(userId) {
    const sqlCmd = `DELETE FROM bug WHERE bug._id = ${userId}`;
    return db_service_1.dbService
        .runSQL(sqlCmd)
        .then((okPacket) => okPacket.affectedRows === 1
        ? okPacket
        : Promise.reject(new Error(`No user deleted - user id ${userId}`)));
}
//# sourceMappingURL=users.service.js.map