const mysql = require('mysql');

const driver = null;

/*
const getConnection = () => {
  if (!driver) {
    driver = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'library',
      multipleStatements: true,
    });
  }
  return driver;
};
*/

const mockConnection = {
  query: async (query, values) => {
    return {
      vacations: [
        {
          type: 'CP',
          requestDate: new Date('2018-12-17T03:24:00'),
          beginTime: new Date('2018-12-24T00:00:00'),
          endTime: new Date('2018-12-27T00:00:00'),
          validation: {
            date: new Date('2018-12-18T11:24:00'),
            validatorId: '4567',
          },
        },
        {
          type: 'CP',
          requestDate: new Date('2018-11-18T18:00:00'),
          beginTime: new Date('2018-11-22T00:00:00'),
          endTime: new Date('2018-11-22T23:59:59'),
          validation: {
            date: new Date('2018-11-20T10:24:00'),
            validatorId: '2569',
          },
        },
      ],
    };
  },
};


module.exports = mockConnection;
