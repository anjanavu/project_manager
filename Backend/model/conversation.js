const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema(
  {
    ticketId: {
      type: Schema.Types.ObjectId,
      ref: "tickets",
    },
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    message: {
      type: String,
      required: true,
    },
    attachment: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Ticket = mongoose.model("tickets", ticketSchema);

module.exports = Ticket;
