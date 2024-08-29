// Belajar Destructuring

// contoh destructur array
// const listBuah = ["jeruk", "salak", "mangga", "anggur", "durian"];
// const buah1 = listBuah[0];
// const buah2 = listBuah[1];
// const buah3 = listBuah[2];
// console.log(buah1, buah2, buah3);

// // Destructur
// const [pertama, kedua, ketiga, ...lainnya] = listBuah;
// console.log(pertama, kedua, ketiga, lainnya);

// contoh destructur object
const buku = {
  judul: "Harry potter",
  harga: 250000,
  halaman: 1000,
  bab: 200,
  pengarang: {
    nama: "J. K. Rowling",
    negara: "inggris",
  },
};

const judulBuku = buku.judul;
const hargaBuku = buku.harga;
const namaPengarang = buku.pengarang.nama;
console.log(judulBuku, hargaBuku, namaPengarang);

// destructur
const {
  judul,
  harga,
  pengarang: { nama },
  ...dataLainya
} = buku;
console.log(judul, harga, nama, dataLainya);

// contoh destructur di function parameter
function penjumlahan([ angka1, angka2 ]) {
  const penjumlahan = angka1 + angka2;
  const pesan = `hasil penjumlahan kedua bilangan adalah ${penjumlahan}`;
  console.log(pesan);
}

function printBuku({ judul, harga, pengarang: { nama } }) {
  const pesan = `Buku ${judul} karya ${nama} dijual dengan harga ${harga}`;
  console.log(pesan);
}

printBuku(buku);
penjumlahan([10, 5]);
