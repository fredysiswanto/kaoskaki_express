import dbPool from '../config/database.js';
const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM users';

  return dbPool.execute(SQLQuery);
};

const addNewUser = (data) => {
  //   INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
  // VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
  const SQLQuery = `INSERT INTO users (name, address) VALUES ('${data.name}', '${data.address}')`;
  return dbPool.execute(SQLQuery);
};
const editUser = (data, idUser) => {
  const SQLQuery = `UPDATE users SET name = '${data.name}', address = '${data.address}' WHERE id=${idUser}`;
  return dbPool.execute(SQLQuery);
};
const deleteUser = (idUser) => {
  const SQLQuery = `DELETE FROM users WHERE id=${idUser}`;
  return dbPool.execute(SQLQuery);
};

export default { getAllUsers, addNewUser, editUser, deleteUser };
