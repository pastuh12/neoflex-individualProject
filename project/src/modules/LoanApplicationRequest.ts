import sequelize from "../db";
import {DataTypes} from "sequelize";

const LoanApplicationRequest = sequelize.define("loanApplicationRequest", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    amount: {type: DataTypes.DECIMAL, allowNull: false},
    term: {type: DataTypes.INTEGER, allowNull: false},
    firstName: {type: DataTypes.STRING, allowNull:false},
    LastName: {type: DataTypes.STRING, allowNull:false},
    MiddleName: {type: DataTypes.STRING, allowNull:true},
    email: {type: DataTypes.STRING, allowNull: false},
    birthdate: {type: DataTypes.DATE, allowNull: false},
    passwordSeries: {type: DataTypes.STRING, allowNull: false},
    passwordNumber: {type: DataTypes.STRING, allowNull: false},
})

export default LoanApplicationRequest
