import DataBase from "../database/database";
import DataTypes from "sequelize";

const User = DataBase.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: {type: DataTypes.STRING, defaultValue: "USER"}
});

const Basket = DataBase.define("basket", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  });

const Poster = DataBase.define("poster", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  agerestriction: { type: DataTypes.INTEGER },
  director: {type: DataTypes.STRING, defaultValue: "undefined"},
  data: { type: DataTypes.STRING },
  rating: { type: DataTypes.FLOAT },
  sumrating: { type: DataTypes.INTEGER },
  numrating: { type: DataTypes.INTEGER },
});

const Ticket = DataBase.define("ticket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  quantity: { type: DataTypes.INTEGER }
});

const MovieTheaters = DataBase.define("movietheaters", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
});

const Sessions = DataBase.define("sessions", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  dataSession: { type: DataTypes.STRING },
});

User.hasOne(Basket);
Basket.belongsTo(User);

Poster.hasMany(Ticket);
Ticket.belongsTo(Poster);

MovieTheaters.hasMany(Sessions);
Sessions.belongsTo(MovieTheaters);

Poster.hasMany(Sessions);
Sessions.belongsTo(Poster);

export { User, Basket, Poster, Ticket, MovieTheaters, Sessions };