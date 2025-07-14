// Install mysql2: npm install mysql2
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password'
});

connection.query('CREATE DATABASE SeuBancoDeDados', function (err, results) {
  if (err) throw err;
  console.log('Database created');
  connection.end();
});


// Install mysql2: npm install mysql2
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SuaSenha' // Altere aqui para sua senha
});

connection.query('CREATE DATABASE SeuBancoDeDados', function (err, results) {
  if (err) throw err;
  console.log('Database created');
  connection.end();
});


// Install mysql2: npm install mysql2
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'SeuUsuario', // Altere aqui para seu usuário
  password: 'SuaSenha' // Altere aqui para sua senha
});

connection.query('CREATE DATABASE SeuBancoDeDados', function (err, results) {
  if (err) throw err;
  console.log('Database created');
  connection.end();
});


// Install mysql2: npm install mysql2
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // Aqui está o servidor
  user: 'SeuUsuario', // Altere para seu usuário
  password: 'SuaSenha' // Altere para sua senha
});

connection.query('CREATE DATABASE SeuBancoDeDados', function (err, results) {
  if (err) throw err;
  console.log('Database created');
  connection.end();
});







