import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  error: {},
  status: "idle",
};

export const getAllPosts = createAsyncThunk(
  `exploreInsight/blogPosts`,
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_ENDPOINT}/blog/posts`,
      );
      // sort data coming from the backend with their updated time, and get the first 3 in the sorted array
      const sortData = response.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );
      const sortedData = sortData.slice(0, 3);
      return sortedData;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  },
);

const exploreInsigntSlice = createSlice({
  name: "exploreInsight",
  initialState,
  // Add reducers for the synchronous actions on the UI
  reducers: {},
  // Add extraReducers for the asynchronous actions on the UI
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "successful";
      })
      .addCase(getAllPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      });
  },
});

export default exploreInsigntSlice.reducer;
