const mahasiswa = {
    nama: 'Halipah',
    umur: 15,
};

const nama = Symbol();
mahasiswa[nama] = 'Zio';

console.log(mahasiswa); 
console.log(mahasiswa[nama]); 