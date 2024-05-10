import jwt from 'jsonwebtoken';

export const checkAuth = (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
  if (token) {
    try {
      //расшировываем token
      const decoded = jwt.verify(token, 'Alva2004');
      //передаем id user-> userId
      req.userId = decoded.userId;
      next();
    } catch (e) {
      return res.status(403).json({
        message: 'No access user',
      });
    }
  } else {
    //No access
    return res.status(403).json({
      message: 'No access',
    });
  }
};
