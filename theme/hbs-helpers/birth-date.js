const moment = require('moment');
const { SafeString } = require('handlebars');

const birthDate = (birth) => {
  const out = [];
  if (birth && Object.keys(birth).length) {
    if (birth.place) {
      out.push(`<div> Nacido en ${birth.place}`);
    }
    if (birth.place && birth.state) {
      out.push(`, ${birth.state}`);
    }
    const year = birth.date ? moment(birth.date.toString(), ['DD-MM-YYYY']).format('YYYY') : '';
    if (year && birth.place && birth.state) {
      out.push(` in ${year}</div>`);
    } else if (year && (!birth.place || birth.state)) {
      out.push(`<div> Nacido en ${year}</div>`);
    }
  }

  return new SafeString(out.join(''));
};

module.exports = { birthDate };
