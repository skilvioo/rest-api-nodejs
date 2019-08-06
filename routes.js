const Joi = require('joi');
const vacationController = require('./vacation-controller');

module.exports = (server) => {
  server.route({
    method: 'GET',
    path: '/vacations',
    handler: vacationController.getUserVacations,
    options: {
      description: 'Get the list of your vacations',
      tags: ['api'],
    },
  });
  server.route({
    method: 'GET',
    path: '/vacations/{id}',
    handler: vacationController.getUserVacation,
    options: {
      description: 'Get the details of a vacation',
      tags: ['api'],
      validate: {
        params: {
          id: Joi.string().uuid().required().description('your vacation\'s uuid'),
        },
      },
    },
  });

  server.route({
    method: 'DELETE',
    path: '/vacations/{id}',
    handler: vacationController.deleteVacation,
    options: {
      description: 'delete an unvalidated vacation',
      tags: ['api'],
      validate: {
        params: {
          id: Joi.string().uuid().required().description('your vacation\'s uuid'),
        },
      },
    },
  });

  server.route({
    method: 'PATCH',
    path: '/vacations/{id}',
    handler: vacationController.updateVacation,
    options: {
      description: 'edit properties of an unvalidated vacation',
      tags: ['api'],
      validate: {
        payload: {
          type: Joi.string().required().description('your vacation type, can be : "CP", "CA", "CSS"...'),
          beginTime: Joi.date().required(),
          endTime: Joi.date().min(Joi.ref('beginTime')).required(),
        },
      },
    },
  });

  server.route({
    method: 'POST',
    path: '/vacations',
    handler: vacationController.createVacation,
    options: {
      description: 'Post a new vacation',
      tags: ['api'],
      validate: {
        payload: {
          type: Joi.string().required().description('your vacation type, can be : "CP", "CA", "CSS"...'),
          beginTime: Joi.date().required(),
          endTime: Joi.date().min(Joi.ref('beginTime')).required(),
        },
      },
    },
  });
  server.route({
    method: 'PUT',
    path: '/collaborators/{idCollaborator}/vacations/{idVacation}/validation',
    handler: vacationController.validateCollaborator,
    options: {
      description: 'validate a collaborator vacation',
      tags: ['api'],
      validate: {
        params: {
          idCollaborator: Joi.string().uuid().required().description('your collaborator\'s uuid'),
          idVacation: Joi.string().uuid().required().description('your vacation\'s uuid'),
        },
      },
    },
  });
};
