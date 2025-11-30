const connection = require("../db/connection");

const fs = require("fs");
const path = require("path");

async function createTables() {
  const filename = fs.readdirSync("./src/entities");

  const files = filename.filter((file) => {
    return file.includes(".json");
  });

  files.forEach((file) => {
    const nameOfFile = file.split(".")[0];
    fs.readFile(
      path.join(__dirname, "../src/entities", file),
      "utf8",
      (err, data) => {
        if (err) {
          return;
        }
        const tableData = JSON.parse(data);
        const keys = Object.keys(tableData);
        const values = Object.values(tableData);
        let sql = `CREATE TABLE ${nameOfFile}(`;
        for (let i = 0; i < keys.length - 1; i++) {
          sql = sql + ` ${keys[i]} ${values[i]},`;
        }
        sql = sql + ` ${keys[keys.length - 1]} ${values[keys.length - 1]})`;
        connection.query(sql, (err, res) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("table created");
        });
      }
    );
  });
}
module.exports = { createTables };

createTables();
