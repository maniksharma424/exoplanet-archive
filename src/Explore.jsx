import React, { useState, useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import { filterData } from "./utils/search";
import DataTable from "./components/DataTable";
import { useNavigate } from "react-router-dom";
import { clearFilteredData } from "./redux/dataSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const Explore = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    hostname: "",
    pl_name: "",
    disc_facility: "",
    discoverymethod: "",
    disc_year: "",
  });

  const planetsData = useSelector((store) => store?.dataslice?.planetData);

  const tableData = useSelector((store) => store?.dataslice?.tableData);
  const filteredData = useSelector((store) => store?.dataslice?.filteredData);

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    toast.info("Select filters to get started", {
      position: "bottom-right",
      autoClose: 3000,
      theme: "light",
    });
    if (!planetsData?.host_names) {
      navigate("/");
    }
  }, [planetsData, navigate]);

  return (
    <Provider store={store}>
      <ToastContainer />
      <div className="flex sm:flex-row flex-col w-full justify-around  font-[400] sm:text-[16px] text-[10px] sm:p-12 p-5 ">
        {planetsData?.host_names ? (
          <select
            className="sm:w-1/6 w-full border-[1px] p-2 border-gray-700 cursor-pointer sm:my-0 my-1"
            defaultValue={"Host Name"}
            name=""
            id="hostName"
            onChange={(e) => handleFilterChange("hostname", e.target.value)}
          >
            <option value="" selected>
              Host name
            </option>
            {planetsData?.host_names?.map((pl_name, index) => {
              return (
                <option className="bg-white text-black p-1" key={index}>
                  {pl_name}
                </option>
              );
            })}
          </select>
        ) : null}
        {planetsData?.planet_names ? (
          <select
            className="sm:w-1/6 w-full border-[1px] p-2 border-gray-700 cursor-pointer sm:my-0 my-1"
            name=""
            id="PlanetName"
            onChange={(e) => handleFilterChange("pl_name", e.target.value)}
          >
            <option value="" selected>
              Planet Names
            </option>
            {planetsData?.planet_names?.map((pl_name, index) => {
              return <option key={index}>{pl_name}</option>;
            })}
          </select>
        ) : null}

        {planetsData?.discovery_facility ? (
          <select
            className="sm:w-1/6 w-full border-[1px] p-2 border-gray-700 cursor-pointer sm:my-0 my-1"
            name="discoveryFacility"
            id="discoveryFacility"
            onChange={(e) =>
              handleFilterChange("disc_facility", e.target.value)
            }
          >
            <option value="" selected>
              Discover Facility
            </option>
            {planetsData?.discovery_facility?.map((pl_name, index) => {
              return <option key={index}>{pl_name}</option>;
            })}
          </select>
        ) : null}
        {planetsData?.discovery_method ? (
          <select
            className="sm:w-1/6 w-full border-[1px] p-2 border-gray-700 cursor-pointer sm:my-0 my-1"
            name="discoveryMethod"
            id="discoveryMethodu"
            onChange={(e) =>
              handleFilterChange("discoverymethod", e.target.value)
            }
          >
            <option value="" selected>
              Discovery Method
            </option>
            {planetsData?.discovery_method?.map((pl_name, index) => {
              return <option key={index}>{pl_name}</option>;
            })}
          </select>
        ) : null}
        {planetsData?.discovery_year ? (
          <select
            className="sm:w-1/6 w-full border-[1px] p-2 border-gray-700 cursor-pointer sm:my-0 my-1"
            name="discoveryYear"
            id="discoveryYear"
            onChange={(e) => handleFilterChange("disc_year", e.target.value)}
          >
            <option value="" selected>
              Discovery Year
            </option>
            {planetsData?.discovery_year?.map((pl_name, index) => {
              return <option key={index}>{pl_name}</option>;
            })}
          </select>
        ) : null}

        <button
          onClick={() => {
            filterData(selectedFilters, dispatch, tableData);
          }}
          className="p-2 sm:px-3 bg-black rounded text-white"
        >
          Search
        </button>
        <button
          onClick={() => {
            dispatch(clearFilteredData());
          }}
          className="p-2 sm:px-3 bg-black rounded-md text-white sm:my-0 my-1"
        >
          Clear
        </button>
      </div>
      {filteredData ? (
        <DataTable data={filteredData}></DataTable>
      ) : (
        <div className="w-full h-screen flex flex-col justify-center items-center font-monstreat sm:text-[20px] text-[14px] p-10">
          <p className="relative bottom-24">
            Exoplanets are the planets outsode of out solar system
          </p>
          <p className="relative bottom-20">
            Here you can query{" "}
            <a
              target="blank"
              href="https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=PS"
              className="font-[600] text-blue-500"
            >
              NASA's Exoplanet Archive
            </a>{" "}
            and find the one you love the most
          </p>
        </div>
      )}
    </Provider>
  );
};

export default Explore;
