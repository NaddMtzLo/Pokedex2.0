import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from "./slices/nameTrainer.slice";

export default configureStore({

    reducer: {
        // aqui van nuestros estados globales (slices)
        nameTrainer 
    }

})