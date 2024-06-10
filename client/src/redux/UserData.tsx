import { createSlice } from "@reduxjs/toolkit";

const UserData = createSlice({
  name: "UserData",
  initialState: {
    SignedIn: false,
    name: "",
    email: "",
    userName: "",
    TotalPoints: ""
  },
  reducers: {
    setSignedIn(state, action) {
      state.SignedIn = action.payload;
    },
    setName(state, action) {
      state.name = action.payload
    },
    setEmailData(state, action) {
      state.email = action.payload
    },
    setUserName(state, action) {
      state.userName = action.payload
    },
    setTotalPoints(state, action) {
      state.TotalPoints = action.payload
    }
  },
});

export const { setSignedIn, setEmailData,setName,setTotalPoints,setUserName } = UserData.actions;
export default UserData.reducer;
