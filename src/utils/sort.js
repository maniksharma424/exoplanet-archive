import { setFilteredData } from "../redux/dataSlice";

export const dynamicSort = (array, dispatch, property, order) => {
  const sortedArray = array.slice().sort((a, b) => {
    const aValue = a[property];
    const bValue = b[property];
    return order === "ascending"
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });
  dispatch(setFilteredData(sortedArray));
  console.log(sortedArray);
};
