//  Object.js
// Soal 1
const mobil ={
    merk: 'Toyota',
    model: 'Avanza',
    tahun: 2024,
    };
    
    console.log(mobil);
    
    
// Soal 2
const buku ={
    judul: 'Pemrograman JavaScript',
    penulis: 'Zio Alfinois',
    harga: 85000
    };
    
buku.penerbit = 'BazmaMedia';
buku.harga = 90000;
console.log(buku);

// Soal 3
const orang ={
    nama: 'Rafka Aditya Ramadan',
    umur: 15,
    hobi: 'Programing',
    };

console.log(`Halo nama saya ${orang.nama},umur saya ${orang.umur}, dan hobi saya adalah ${orang.hobi} `);


// Array.js
// Soal 1:Push dan Pop
let bahasa_pemrograman = []
bahasa_pemrograman.push('Python');
bahasa_pemrograman.push('JavaScript');
bahasa_pemrograman.push('PHP');
bahasa_pemrograman.push('C++');
bahasa_pemrograman.push('HTML');
console.log(bahasa_pemrograman);
bahasa_pemrograman.pop();
console.log(bahasa_pemrograman);

// Soal 2:Unshift dan shift
let number = [3, 6, 9, 12, 15];
number.unshift(0)
console.log(number);
number.shift()
console.log(number);
console.log(number[0]);

// Soal 3:Filter
const ages = [18, 22, 16, 25, 30, 14, 17, 15, 24];
const umurDewasa = ages.filter(ages => ages > 18);
console.log(umurDewasa)

// Soal 4:Concat
let number1 = [2, 4, 6];
let addnumber = [1, 3, 5];
allnumber = number1.concat(addnumber);
console.log(allnumber);

// Soal 5:Splice
let colors = ['red', 'black', 'blue', 'yellow', 'green'];
colors[0] = 'orange'
colors [1] = 'pink'
console.log(colors);


