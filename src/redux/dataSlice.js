import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    planetData: {},
    tableData: [],
    filteredData: null,
  },
  reducers: {
    setData: (state, action) => {
      state.planetData = action.payload;
    },
    setTableData: (state, action) => {
      state.tableData = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    clearFilteredData: (state, action) => {
      state.filteredData = null;
    },
  },
});
export default dataSlice.reducer;
export const { setData, setTableData, setFilteredData, clearFilteredData } =
  dataSlice.actions;
