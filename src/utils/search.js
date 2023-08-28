import { setFilteredData } from "../redux/dataSlice";

export const filterData = async (selectedFilters, dispatch, tableData) => {
  const searchResultData = await tableData.filter((exoplanet) => {
    let passFilter = true;

    if (
      selectedFilters.hostname !== "" &&
      exoplanet.hostname !== selectedFilters.hostname
    ) {
      passFilter = false;
    }

    if (
      selectedFilters.pl_name !== "" &&
      exoplanet.pl_name !== selectedFilters.pl_name
    ) {
      passFilter = false;
    }

    if (
      selectedFilters.disc_facility !== "" &&
      exoplanet.disc_facility !== selectedFilters.disc_facility
    ) {
      passFilter = false;
    }

    if (
      selectedFilters.discoverymethod !== "" &&
      exoplanet.discoverymethod !== selectedFilters.discoverymethod
    ) {
      passFilter = false;
    }

    if (
      selectedFilters.disc_year !== "" &&
      exoplanet.disc_year !== selectedFilters.disc_year
    ) {
      passFilter = false;
    }

    return passFilter;
  });

  dispatch(setFilteredData(searchResultData));
};
