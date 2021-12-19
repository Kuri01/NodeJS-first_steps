const os = require('os');
const fs = require('fs');
console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
console.log('User: ', os.userInfo().username);

const genders = ['male', 'female'];
const femaleNames = [
  'Emma',
  'Olivia',
  'Ava',
  'Isabella',
  'Sophia',
  'Charlotte',
  'Mia',
  'Amelia',
];

const maleNames = [
  'Liam',
  'Noah',
  'Oliver',
  'Elijah',
  'William',
  'James',
  'Benjamin',
  'Lucas',
];

const lastNames = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Garcia',
  'Miller',
  'Davis',
];

const people = [];

const randChoice = (arr) => {
  randNum = Math.floor(Math.random() * arr.length);
  finalWorld = arr[randNum];
  return finalWorld;
};

let step;

for (step = 0; step < 20; step++) {
  const newPerson = {};
  newPerson.gender = randChoice(genders);
  newPerson.firstName =
    newPerson.gender === 'male'
      ? randChoice(maleNames)
      : randChoice(femaleNames);
  newPerson.lastName = randChoice(lastNames);
  newPerson.age = Math.floor(Math.random() * 100) + '';
  people.push(newPerson);
}

const jsonString = JSON.stringify(people);

let dupa = { dupa: 'dupa', kupa: 'kupa' };

fs.writeFile('outputfile.json', jsonString, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
