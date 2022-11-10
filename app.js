const contacts = require("./contacts");

const main = async () => {
  const nama = await contacts.tulisPertanyaan("Masukkan Nama Anda :");
  const email = await contacts.tulisPertanyaan("Masukkan Email Anda :");
  const nomerHP = await contacts.tulisPertanyaan(
    "Masukkan Nomer Handphone Anda :"
  );
  const alamat = await contacts.tulisPertanyaan("Masukkan alamat Anda :");
  const usia = await contacts.tulisPertanyaan("Masukkan usia Anda :");

  contacts.simpanContact(nama, email, nomerHP, alamat, usia);
};

main();
