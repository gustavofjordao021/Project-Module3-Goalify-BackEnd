const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

// mongoose
// .connect(process.env.MONGODB_URI, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// })
// .then((x) => {
//   console.log(
//     `Connected to Mongo! Database name: "${x.connections[0].name}"`
//   );
// })
// .catch((err) => {
//   console.error("Error connecting to mongo", err);
// });
