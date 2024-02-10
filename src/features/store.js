import { configureStore } from "@reduxjs/toolkit";
import CollectionSlice from "./Slices/CollectionSlice";
import LocalitiesSlice from "./Slices/LocalitiesSlice";
import DeliverySlice from "./Slices/DeliverySlice";
import DiningSlice from "./Slices/DiningSlice";
import CartSlice from "./Slices/CartSlice";
const store = configureStore(
    {
        reducer:{
            Collection:CollectionSlice,
            Localities:LocalitiesSlice,
            Delivery:DeliverySlice,
            Dining:DiningSlice,
            Cart:CartSlice
        }
    }
)

export default store;