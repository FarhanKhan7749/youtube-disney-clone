import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommends : null,
    newDisney : null,
    original : null,
    trendings : null,
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies : (state, action) => {
            state.recommends = action.payload.recommends
            state.newDisney = action.payload.newDisney
            state.original = action.payload.original
            state.trendings = action.payload.trendings
        }
    }
});

export const { setMovies } = movieSlice.actions;

export const selectRecommends = state => state.movie.recommends;
export const selectNewDisney = state => state.movie.newDisney;
export const selectOriginal = state => state.movie.original;
export const selectTrendings = state => state.movie.trendings;

export default movieSlice.reducer;