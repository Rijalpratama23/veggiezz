import { Sequelize } from "sequelize";

const db = new Sequelize('veggiez_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;
