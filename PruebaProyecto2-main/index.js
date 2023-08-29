const aioKey = "aio_IDIi07yUHWpvmNrdWfRGGlZUSrYo";
const url = 'https://io.adafruit.com/api/v2/LaraGenovese/feeds/led-de-prueba/data';
const formData = new FormData();

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection(process.env.DATABASE_URL='mysql://kjatjg0i8vm3hisllns4:pscale_pw_zWOMXmwzgeIEozdqJebkAZPYGzJEwZkO7IOUHU2aHsd@aws.connect.psdb.cloud/proyecto?ssl={"rejectUnauthorized":true}'
);
connection.connect((err) => {
  if (err) {
    console.error('Error al conectarse a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos.');
});


const app = express();

app.get("/status", (req, res) => {
  connection.query('SELECT * FROM boton_prendiendo LIMIT 1', (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).json({
        error: err
      })
    }
    res.json(results[0].name);
  });
});

app.get("/on", (req, res) => {
  const updateQuery = 'UPDATE boton_prendiendo SET name = ?';
  const values = ['ON'];
  connection.query(updateQuery, values, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta de actualización:', error);
      // Manejar el error
    } else {
      console.log('Actualización exitosa. Filas afectadas:', results.affectedRows);
      // Hacer algo con los resultados
    }
  })

  console.log('Se ejecuto el UPDATE');

  formData.append('value', 'ON');

fetch(url, {
  method: 'POST',
  headers: {
    "X-AIO-Key": aioKey
  },
  body: formData
})
  .then(response => {
    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
});
// query update
// post a adafruit
// res.status(200);

app.get("/off", (req, res) => {
  const updateQuery = 'UPDATE boton_prendiendo SET name = ?';
  const values = ['OFF'];
  value = 'OFF'; 
  connection.query(updateQuery, values, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta de actualización:', error);
      // Manejar el error
    } else {
      console.log('Actualización exitosa. Filas afectadas:', results.affectedRows);
      // Hacer algo con los resultados
    }
  })
formData.append('value', 'OFF');

fetch(url, {
  method: 'POST',
  headers: {
    "X-AIO-Key": aioKey
  },
  body: formData
})
  .then(response => {
    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });

  console.log('Se ejecuto el UPDATE');

});

app.post("/reRegistrarse", (req, res) => {
  const updateQuery = 'INSERT INTO usuario SET nombre = ?,mail = ?, contraseña = ?';
  const values = ['OFF'];
  value = 'OFF'; 
  connection.query(updateQuery, values, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta de actualización:', error);
      // Manejar el error
    } else {
      console.log('Actualización exitosa. Filas afectadas:', results.affectedRows);
      // Hacer algo con los resultados
    }
  })
formData.append('value', 'OFF');
});

////////////////////////////////////////////////////////

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});