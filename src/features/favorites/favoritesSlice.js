import { createSlice } from "@reduxjs/toolkit";
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => [...state, action.payload],
    removeFavorite: (state, action) =>
      state.filter((favorite) => favorite.id !== action.payload),
  },
});
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
