const pool = require('../config/db');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
  try {
    const { firstname, username, password } = req.body;
    const salt = await bcrypt.genSalt(10)
    const encryptPassword = await bcrypt.hash(password, salt)

    const users = await pool.query('select * from users where username = $1', [username])
    if (users.rows.length > 0) {
      return res.status(403).send({message: 'Bu username tizimda mavjud'})
    }
    const result = await pool.query(
      `insert into users(firstname,  username, password) values 
    ($1,$2,$3)`,
      [firstname, username, encryptPassword]
    );
    res.json(result.rows)
  } catch (error) {
    console.log(error);
    res.status(500).send("Serverda xatolik" + error);
  }
}

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await pool.query(`select * from users where username = $1`, [username]);

    // User borligini tekshirish
    if (result.rowCount === 0) res.status(404).json({message: 'Username yoki parol hato'})

    // Password to'g'riligi tekshirish
    const user = result.rows[0]
    const isvalidPassword = await bcrypt.compare(password, user.password)
    if (!isvalidPassword) res.status(404).json({message: 'Username yoki parol hato'})

    const token = jwt.sign(
      {userId: user.id, username: user.username},
      "HELLO WORLD",
      {expiresIn: '1h'}
    )

    res.status(200).json({user,token});
  } catch (error) {
    console.log(error);
    res.status(500).send("Serverda xatolik" + error);
  }
}

exports.user = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query("select * from users where id = $1", [id]);
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("Serverda xatolik");
  }
}