const users = [
    {
        name: 'zio',
        age: 16,
        gender: 'male',
    },
    {
        name: 'breza',
        age: 17,
        gender: 'male',
    },
    {
        name: 'maajidah',
        age: 16,
        gender: 'female',
    },
];

const zio = users.find((user) => user.name === 'zio');

console.log(zio); 