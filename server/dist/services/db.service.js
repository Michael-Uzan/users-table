"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbService = void 0;
const config_1 = __importDefault(require("../config"));
const mysql_1 = __importDefault(require("mysql"));
exports.dbService = {
    runSQL,
};
const connection = mysql_1.default.createConnection(config_1.default);
connection.connect((error) => {
    if (error) {
        throw new Error("mySql failed connection");
    }
    console.log("connected to SQL server");
});
function runSQL(sqlCommand) {
    return new Promise((resolve, reject) => {
        connection.query(sqlCommand, function (error, results) {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
//# sourceMappingURL=db.service.js.map