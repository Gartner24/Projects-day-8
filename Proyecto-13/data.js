const fs = require('fs');

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    const fileName = `proyecto12Ejercicio${i.toString().padStart(2, '0')}SantiagoValenciaLeon.JuanPabloSanchez.js`;
    fs.writeFile(fileName, '', (err) => {
      if (err) throw err;
      console.log(`${fileName} created successfully.`);
    });
  }
}