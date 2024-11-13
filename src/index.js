import { app } from "./app.js";
import connectDB from "./db/connection.js";

const PORT = 3000;
connectDB()
  .then(() => {
    app.listen(PORT || 3005, () => {
      console.log(`Running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Mongo Connection failed: `, error);
  });
  