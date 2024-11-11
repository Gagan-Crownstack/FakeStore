// store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";

// Instead of exporting the store creator function
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Export types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
