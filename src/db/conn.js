const mongoose = require("mongoose");

DB =
  "mongodb+srv://shreyansraj7:mFv2VMQb7unQkMQo@cluster0.oppyzww.mongodb.net/stud_regis?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log(`connection success`);
  })
  .catch((e) => {
    console.log(`${e}no connection`);
  });

// mongodb://localhost:27017/${process.env.DB_NAME}
