import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';

export const Prueba = sequelize.define(
    "prueba",
    {
        int_prueba_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        str_prueba_nombre:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
    },
    {
        timestamps: false,
        schema: "public",
        freezeTableName: true,
        
    }
);