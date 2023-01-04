import sequelize from "../db";
import {DataTypes} from "sequelize";

const Credit = sequelize.define("Credit", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    amount: {type: DataTypes.DECIMAL, allowNull: false},
    term: {type: DataTypes.INTEGER, allowNull: false},
    monthlyPayment: {type: DataTypes.DECIMAL, allowNull:false},
    rate: {type: DataTypes.DECIMAL, allowNull:false},
    psk: {type: DataTypes.DECIMAL, allowNull:true},
    isInsuranceEnabled: {type: DataTypes.BOOLEAN, allowNull: false},
    birthdate: {type: DataTypes.DATE, allowNull: false},
    isSalaryClient: {type: DataTypes.BOOLEAN, allowNull: false},
    paymentSchedule: {type: DataTypes.INTEGER, allowNull: true},
})

export default Credit
