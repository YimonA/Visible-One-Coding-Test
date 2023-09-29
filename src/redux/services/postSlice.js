import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: null,
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    addPost: (state, { payload }) => {
      state.posts = payload.posts;
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
