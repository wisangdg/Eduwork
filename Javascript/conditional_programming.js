//if else
let nilai = 80;
if (nilai >= 75) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}

// ternary operator
let umur = 18;
let status = umur >= 17 ? "Dewasa" : "Masih Anak-anak";
console.log(status);

// switch case
let hari = "Senin";
switch (hari) {
  case "Senin":
    console.log("Hari Kerja");
    break;
  case "Selasa":
    console.log("Hari Kerja");
    break;
  case "Rabu":
    console.log("Hari Kerja");
    break;
  case "Kamis":
    console.log("Hari Kerja");
    break;
  case "Jumat":
    console.log("Hari Kerja");
    break;
  case "Sabtu":
    console.log("Hari Libur");
    break;
  case "Minggu":
    console.log("Hari Libur");
    break;
  default:
    console.log("Hari tidak valid");
}
