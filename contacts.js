const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// membuat folder data
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// membuat file contact.json jika belum ada

const dataPath = "./data/contact.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanContact = (nama, email, nomerHP, alamat, usia) => {
  const contact = { nama, email, nomerHP, alamat, usia };
  const file = fs.readFileSync("data/contact.json", "utf8");
  const contacts = JSON.parse(file);

  contacts.push(contact);
  fs.writeFileSync("data/contact.json", JSON.stringify(contacts));
  console.log("Terimakasih sudah memasukkan data.");
  rl.close();
};

module.exports = { tulisPertanyaan, simpanContact };
