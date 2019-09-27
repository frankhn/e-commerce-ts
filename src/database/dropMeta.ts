import db from "./models";

export const DropSequelizeMeta = db.sequelize.query('DROP TABLE IF EXIST "SequelizeMeta"', { raw: true })

DropSequelizeMeta
  .then(() => {
    process.exit(0)
  })
  .catch(() => {
    process.exit(0)
  })