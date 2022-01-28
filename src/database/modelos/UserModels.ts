import { DataTypes } from "sequelize/dist";
import { db } from "../db";

export const UserModel = db.define('produtos',{
    id:{ 
      type:DataTypes.INTEGER,
      autoIncrement:true,
      allowNull: false,
      primaryKey: true   
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao:{
      type: DataTypes.STRING,
      allowNull: false,
    } })


