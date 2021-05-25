const fs = require('fs');

const book = {
    title: "Sapiens",
    author: "Yuval Noah Harari"
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)

const dataJSON = fs.readFileSync('1-json.json').toString();

const data = JSON.parse(dataJSON);

debugger;

console.log(data == book);
