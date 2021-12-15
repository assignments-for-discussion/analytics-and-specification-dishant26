function nanFilter(numbers){
  return numbers.filter(value => !Number.isNaN(value));
}

function average(numbers) {
  const filteredNums = nanFilter(numbers);
  return filteredNums.reduce((p, c)=> p + c, 0) / filteredNums.length;
}

module.exports = {average};
