const ValidationFactory = ({ date = new Date(), validatorId }) => ({
  date,
  validatorId,
});

const VacationFactory = (type, requestDate, beginTime, endTime, validation) => ({
  type,
  requestDate,
  beginTime,
  endTime,
  validation: ValidationFactory(validation),
});

module.exports = {
  VacationFactory,
  ValidationFactory,
};
