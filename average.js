
function removenan(numbers) {
  return numbers.filter(value => !Number.isNaN(value));
  
}

function average(numbers) {
  const numbers_new = removenan(numbers);
  return numbers_new.reduce((p, c)=> p + c, 0) / numbers_new.length;
}

module.exports = {average};
