var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


function map(arr, funct) {
  var nArr = [];
  arr.forEach(function(word) {
    nArr.push(funct(word));
  }); console.log(nArr);
}