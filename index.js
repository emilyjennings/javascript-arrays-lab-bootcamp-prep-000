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
  kittens.pop()
}