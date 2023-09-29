import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: null,
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.posts = payload.posts;
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
