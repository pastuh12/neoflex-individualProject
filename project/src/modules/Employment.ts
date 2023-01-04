import sequelize from "../db";
import {DataTypes} from "sequelize";

const LoanApplicationRequest = sequelize.define("loanApplicationRequest", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    employmentStatus: {type: DataTypes.ENUM, allowNull: false},
    employerINN: {type: DataTypes.STRING, allowNull: false},
    salary: {type: DataTypes.DECIMAL, allowNull:false},
    positipon: {type: DataTypes.ENUM, allowNull:false},
    workExperienceTotal: {type: DataTypes.INTEGER, allowNull:true},
    workExperienceCurrent: {type: DataTypes.INTEGER, allowNull: false},
})

export default LoanApplicationRequest
