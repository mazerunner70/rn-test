import moment from 'moment';

test('moment date format', () => {
  const date = moment("06-10-2017", 'dd-mm-yyyy').startOf('day');
  console.log(date);
})