import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Initial state for the search slice
const initialState: SearchState = {
  query: '',
};

// Create the search slice
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    // Reducer to set the search query
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

// Export the action creator for setting the search query
export const { setQuery } = searchSlice.actions;

// Export the reducer as the default export
export default searchSlice.reducer;
