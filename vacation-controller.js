const sqlConnection = require('./sql-driver');

const getUserVacations = async (request, h) => {
  let userId = request && request.auth && request.auth.credentials && request.auth.credentials.id;
  userId = '598912';
  const query = 'SELECT * FROM vacation WHERE userId LIKE ?';
  const values = [
    userId,
  ];
  const results = await sqlConnection.query(query, values);
  return h.response(results).code(200);
};
const getUserVacation = (request, h) => {
  console.log('getUserVacation');
  return h.response().code(200);
};
const deleteVacation = (request, h) => {
  console.log('deleteVacation');
  return h.response().code(200);

};
const updateVacation = (request, h) => {
  console.log('updateVacation');
  return h.response().code(200);

};
const createVacation = (request, h) => {
  console.log('createVacation');
  return h.response().code(200);

};
const validateCollaborator = (request, h) => {
  console.log('validateCollaborator');
  return h.response().code(200);

};

module.exports = {
  getUserVacations,
  getUserVacation,
  deleteVacation,
  updateVacation,
  createVacation,
  validateCollaborator,
};
