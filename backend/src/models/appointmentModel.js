const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

exports.saveAppointment = async (appointmentData) => {
  const { professional, procedure, date } = appointmentData;
  const query = 'INSERT INTO appointments (professional, procedure, date) VALUES (?, ?, ?)';
  await db.execute(query, [professional, procedure, date]);
};