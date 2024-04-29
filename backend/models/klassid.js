import db from "../config/database.js";
import { DataTypes, Model } from "sequelize";
class Klassid extends Model { }

Klassid.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nimi: { type: DataTypes.STRING },
        perekonnanimi: { type: DataTypes.STRING },
        telefoninumber: { type: DataTypes.STRING }
    },
    {
        sequelize: db,
        tableName: "klassid",
        freezeTableName: true,
        modelName: "Klassid",
        timestamp: true,
    }
);
export default Klassid;
