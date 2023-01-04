import sequelize from "../db";
import {DataTypes} from "sequelize";

const LoanApplicationRequest = sequelize.define("loanApplicationRequest", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number: {type: DataTypes.INTEGER, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
    totalPayment: {type: DataTypes.DECIMAL, allowNull:false},
    interestPayment: {type: DataTypes.DECIMAL, allowNull:false},
    debtPayment: {type: DataTypes.DECIMAL, allowNull:true},
    remainingDebt: {type: DataTypes.DECIMAL, allowNull: false},
})

export default LoanApplicationRequest
