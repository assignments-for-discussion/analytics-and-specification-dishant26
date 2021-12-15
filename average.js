
function removeNaN(numbers) {
  const numbers_new = numbers.filter(value => !Number.isNaN(value));
  return numbers_new
}

function average(numbers) {
  const numbers_new = removeNaN(numbers);
  return numbers_new.reduce((p, c)=> p + c, 0) / numbers_new.length;
}

module.exports = {average};
