import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isSignIn: false,
        userData: null,
        searchInput: "tech",
        blogData: null,
    },


reducers: {
    setSignIn: (state, action) => {
        state.isSignIn = action.payload;
    },
    setUserData: (state, action) => {
        state.userData = action.payload;
    },
    setInput: (state, action) => {
        state.searchInput = action.payload;
    },
    setBlogData: (state, action) => {
        state.blogData = action.payload;
    },

},


});


export const {
    setSignIn,
    setUserData,
    setInput,
    setBlogData
} = userSlice.actions;

export const selectSignedIn = (state) => state.user.isSignIn;
export const selectUserData = (state) => state.user.isSignIn;
export const selectUserInput = (state) => state.user.isSignIn;
export const selectBlogData = (state) => state.user.isSignIn;

export default userSlice.reducer;