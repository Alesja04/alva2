import db from "../config/database.js";
import { DataTypes, Model } from "sequelize";
class Delivery extends Model {}

Delivery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nimi: { type: DataTypes.STRING },
    perekonnanimi: { type: DataTypes.STRING },
    telefoninumber: { type: DataTypes.STRING },
    aadress: { type: DataTypes.STRING },
  },
  {
    sequelize: db,
    tableName: "delivery",
    freezeTableName: true,
    modelName: "Delivery",
    timestamp: true,
  }
);
export default Delivery;
