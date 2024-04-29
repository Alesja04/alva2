import db from '../config/database.js';
import { DataTypes, Model } from 'sequelize';
class Delivery extends Model {}

Delivery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    orderId: { type: DataTypes.BIGINT },
    dateDelivery: { type: DataTypes.DATE },
    nimi: { type: DataTypes.STRING },
    perekonnanimi: { type: DataTypes.STRING },
    telefoninumber: { type: DataTypes.STRING },
    aadress: { type: DataTypes.STRING },
    products: { type: DataTypes.JSON },
    totalPrice: { type: DataTypes.FLOAT },
    totalQuantity: { type: DataTypes.INTEGER },
  },
  {
    sequelize: db,
    tableName: 'delivery',
    freezeTableName: true,
    modelName: 'Delivery',
    timestamp: true,
  },
);
export default Delivery;
