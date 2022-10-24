import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter/Count";

export default configureStore({
  reducer: {
    counter,
  },
});