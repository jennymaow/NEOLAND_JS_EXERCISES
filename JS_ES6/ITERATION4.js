// 4.1

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const names = users.map((user) => user.name);

console.log(names);

//4.2

for (name1 of names) {
  const letters = [...name1];
  console.log (letters);
  if (letters[0] == "A") {
    name1 = "Anacleto";
  }
}

console.log (names);

