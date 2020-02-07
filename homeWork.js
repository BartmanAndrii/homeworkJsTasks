https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
  var re = " ";
  return string.split(re);
}

https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function(list){
    return Math.min(list);
}
var max = function(list){
    return Math.max(list);
}


https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
if (queue[queue.length-1] === "wolf") {
        return "Pls go away and stop eating my sheep";
    } else {
        let index = queue.indexOf("wolf");
        return "Oi! Sheep number " + (queue.length - index - 1) + "! You are about to be eaten by a wolf!";
    }
}

https://www.codewars.com/kata/beginner-lost-without-a-map

function maps(x){
    let t = x.map(n => n * 2);
    return t;
}
