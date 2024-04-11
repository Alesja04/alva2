import db from '../config/database.js';
import { DataTypes, Model } from 'sequelize';
class Zajavka extends Model {}

Zajavka.init ({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: { type: DataTypes.STRING },
  lastname: { type: DataTypes.STRING },
  dob: { type: DataTypes.DATE },
  email: { type: DataTypes.STRING },
  education: { type: DataTypes.STRING },
  },
  {
    sequelize: db,
    tableName: 'zajavka',
    freezeTableName: true,
    modelName: 'Zajavka',
    timestamp: true,
  },
  );
  export default Zajavka;