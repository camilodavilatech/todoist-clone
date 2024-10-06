import { defineDb, defineTable, column } from "astro:db";

const User = defineTable({
  columns: {
    idUser: column.number({ primaryKey: true }),
    firstName: column.text(),
    lastName: column.text(),
    userAvatar: column.text(),
    email: column.text(),
  },
});

const Task = defineTable({
  columns: {
    idTask: column.number({ primaryKey: true }),
    userId: column.number({ references: () => User.columns.idUser }),
    description: column.text(),
    dateTime: column.date(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {},
});
