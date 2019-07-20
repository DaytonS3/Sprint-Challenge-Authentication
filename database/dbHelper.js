const db = require("./dbConfig");

module.exports = {
  add,
  login,
  find
};

function add(user) {
  return db("users").insert(user);
}

function login(filter) {
  return db("users").where(filter);
}

function find() {
  return db("users");
}
