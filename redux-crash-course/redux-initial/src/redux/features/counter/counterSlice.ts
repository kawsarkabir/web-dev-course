import { createSlice } from "@reduxjs/toolkit";

type CounterSlice = {
  count: number;
};

const initialState: CounterSlice = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});
export default counterSlice.reducer