import sequelize from "../db";
import { DataTypes } from "sequelize";

const ScoringData = sequelize.define("ScoringData", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    amount: { type: DataTypes.DECIMAL, allowNull: false },
    term: { type: DataTypes.INTEGER, allowNull: false },
    firstName: { type: DataTypes.STRING, allowNull: false },
    LastName: { type: DataTypes.STRING, allowNull: false },
    MiddleName: { type: DataTypes.STRING, allowNull: true },
    gender: { type: DataTypes.ENUM, allowNull: false },
    birthdate: { type: DataTypes.DATE, allowNull: false },
    passwordSeries: { type: DataTypes.STRING, allowNull: false },
    passwordNumber: { type: DataTypes.STRING, allowNull: false },
    passwordIssueDate: { type: DataTypes.DATE, allowNull: false },
    passwordIssueBranch: { type: DataTypes.STRING, allowNull: false },
    maritalStatus: { type: DataTypes.ENUM, allowNull: false },
    dependentAmount: { type: DataTypes.INTEGER, allowNull: false },
    employment: { type: DataTypes.INTEGER, allowNull: false },
    account: { type: DataTypes.STRING, allowNull: false},
    isInsuranceEnabled: {type: DataTypes.BOOLEAN, allowNull: false},
    isSalaryClient: {type: DataTypes.BOOLEAN, allowNull: false},
})

export default ScoringData
