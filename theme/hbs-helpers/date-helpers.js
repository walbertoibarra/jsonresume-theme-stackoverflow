const moment = require('moment');

moment.locale('es');

const dateHelpers = {
  MY: date => moment(date.toString(), ['YYYY-MM-DD']).format('MMMM YYYY'),
  Y: date => moment(date.toString(), ['YYYY-MM-DD']).format('YYYY'),
  DMY: date => moment(date.toString(), ['YYYY-MM-DD']).format('D MMMM YYYY')
};

module.exports = { dateHelpers };
