import { Sequelize } from 'sequelize';

const db = new Sequelize('konditer', 'root', '', {
 host: 'localhost',
 dialect: 'mysql',
});

export default db;