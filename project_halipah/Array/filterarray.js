const users = [
  {
    name: 'sarip',
    age: 16,
    gender: 'male',
  },
  {
    name: 'tiara',
    age: 16,
    gender: 'female',
  },
  {
    name: 'putri',
    age: 16,
    gender: 'female',
  },
  {
    name: 'maajidah',
    age: 16,
    gender: 'female',
  },

];

const usersfemale = users.filter((users) => users.gender === 'female');

console.log(usersfemale);

