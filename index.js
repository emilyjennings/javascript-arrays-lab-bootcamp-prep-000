const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  name = "Ralph";
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  name = "Bob";
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(){
  var newArray = [...kittens, "Broom"];
  return newArray;
}

function prependKitten(){
  var newArray = ["Broom", ...kittens];
  return newArray;
}