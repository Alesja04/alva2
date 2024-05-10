import Users from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// //--------------login
export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        name: req.body.name,
      },
    });
    //controll password
    const isValidPass = await bcrypt.compare(req.body.password, user[0].password);
    if (!isValidPass) return res.status(400).json({ msg: 'Wrong Password' });

    const userId = user[0].id;
    const name = user[0].name;
    const email = user[0].email;
    const role = user[0].role;

    //---jwt.sign создание токена-исп для аутентификации/авторизации пользователей
    const token = jwt.sign({ userId, name, email, role }, 'Alva2004', {
      expiresIn: '30d', //no valid 30d
    });
    //----------cookie
    res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    //вывод данных
    res.json({ userId, name, role, token });
  } catch (error) {
    res.status(404).json({ msg: 'Name not found' });
  }
};

//--------------logout
export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    },
  );
  res.clearCookie('refreshToken');
  return res.sendStatus(200);
};
