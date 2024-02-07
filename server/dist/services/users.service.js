"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersService = void 0;
const db_service_1 = require("./db.service");
function query(criteria = {}) {
    const namePart = (criteria === null || criteria === void 0 ? void 0 : criteria.name) || "";
    const query = `SELECT * FROM users`;
    //   const query = `SELECT * FROM users WHERE users.fullNname LIKE '%${namePart}%'`;
    //   var query = `SELECT * FROM users WHERE users.fulNname LIKE '%${namePart}%' OR bug.description LIKE '%${namePart}%'`;
    return db_service_1.dbService.runSQL(query);
}
exports.usersService = {
    query,
    // getById,
    // add,
    // update,
    // remove
};
//# sourceMappingURL=users.service.js.map