import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    name: "Mir Hussain",
    email: "kawsarkabir@gmail.com",
}
const userSlice = createSlice({
    name: "users",
    initialState,
    reducer: {}
})

export default userSlice.reducer