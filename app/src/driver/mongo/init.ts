import mongoose from "mongoose";

function init() {
  mongoose.set("strictQuery", true);
  mongoose.set("toJSON", {
    virtuals: true,
    transform: (_doc, converted) => {
      delete converted._id;
    },
  });
}

export { init };
