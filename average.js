
function removeNaN(numbers) {
  return numbers.filter(value => !Number.isNaN(value));
  
}

function average(numbers) {
  const numbers_new = removeNaN(numbers);
  return numbers_new.reduce((p, c)=> p + c, 0) / numbers_new.length;
}

module.exports = {average};
