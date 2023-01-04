import sequelize from "../db";
import {DataTypes} from "sequelize";

const LoanOffer = sequelize.define("LoanOffer", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    applicationId: {type: DataTypes.INTEGER, allowNull: false},
    requestedAmount: {type: DataTypes.DECIMAL, allowNull: false},
    totalAmount: {type: DataTypes.DECIMAL, allowNull:false},
    term: {type: DataTypes.INTEGER, allowNull:false},
    monthlyPaymant: {type: DataTypes.DECIMAL, allowNull:true},
    rate: {type: DataTypes.DECIMAL, allowNull: false},
    isInsuranceEnabled: {type: DataTypes.BOOLEAN, allowNull: false},
    isSalaryClient: {type: DataTypes.BOOLEAN, allowNull: false},
})

export default LoanOffer
