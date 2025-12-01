var connection = require("../../db/connection.js");

function findUserId(username) {
  const sql = `SELECT id FROM user WHERE username="${username}"`;
  const res = connection.promise().query(sql);
  return res;
}

async function findUser(username) {
  const [obj] = await findUserId(username);
  const id = obj[0].id;
  if (!id) {
    throw Error("User not found");
  }
  const sql = `SELECT password FROM password WHERE user_id="${id}"`;
  const [rows] = await connection.promise().query(sql);
  if (rows.length === 0) {
    return null;
  } else {
    return { user_id: id, password: rows[0].password };
  }
}

function addUser(username, email) {
  return connection
    .promise()
    .query(`insert into todo (username, email) values('${username}''${email}'`);
}

module.exports = { findUser, addUser };
