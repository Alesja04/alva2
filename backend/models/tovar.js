import db from '../config/database.js';
import { DataTypes, Model } from 'sequelize';
import Category from './category.js';
class Tovar extends Model {}
Tovar.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT },
    category_id: { type: DataTypes.STRING },
  },
  {
    sequelize: db,
    tableName: 'tovar',
    freezeTableName: true,
    modelName: 'Tovar',
    timestamp: true,
  },
);
//определим связи между таблицами
Tovar.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });
Category.hasMany(Tovar, { as: 'products', foreignKey: 'category_id' });
export default Tovar;
