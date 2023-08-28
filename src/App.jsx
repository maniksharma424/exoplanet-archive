import { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import * as Papa from "papaparse";
import { Provider, useDispatch } from "react-redux";
import { setData, setTableData } from "./redux/dataSlice";
import { Link, Outlet, createBrowserRouter } from "react-router-dom";
import Explore from "./Explore";
import store from "./redux/store";
import { useSelector } from "react-redux";
function AppWrapper() {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
}
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const main = async () => {
      Papa.parse(
        "https://nasa-exoplanet.s3.ap-south-1.amazonaws.com/unique-exo-planet.csv",
        {
          download: true,
          header: true,
          complete: function (results) {
            dispatch(setTableData(results?.data));
            const planetNames = new Set();
            const hostNames = new Set();
            const discoveryYear = new Set();
            const discoveryFacility = new Set();
            const discoveryMethod = new Set();

            for (const obj of results.data) {
              planetNames.add(obj.pl_name);

              hostNames.add(obj.hostname);

              discoveryMethod.add(obj.discoverymethod);

              discoveryYear.add(obj.disc_year);

              discoveryFacility.add(obj.disc_facility);
            }

            dispatch(
              setData({
                planet_names: Array.from(planetNames),
                host_names: Array.from(hostNames),
                discovery_year: Array.from(discoveryYear),
                discovery_method: Array.from(discoveryMethod),
                discovery_facility: Array.from(discoveryFacility),
              })
            );
          },

          error: function (error) {
            console.error("Error while parsing:", error);
          },
        }
      );
    };

    main();
  }, []);






  // useEffect(() => {
  //   const getData = async () => {
  //     const Data = await fetch("https://retoolapi.dev/yfb9S0/data").then(
  //       (res) => res.json()
  //     );

  //     dispatch(setTableData(Data));
  //     const planetNames = new Set();
  //     const hostNames = new Set();
  //     const discoveryYear = new Set();
  //     const discoveryFacility = new Set();
  //     const discoveryMethod = new Set();

  //     for (const obj of Data) {
  //       planetNames.add(obj.pl_name);

  //       hostNames.add(obj.hostname);

  //       discoveryMethod.add(obj.discoverymethod);

  //       discoveryYear.add(obj.disc_year);

  //       discoveryFacility.add(obj.disc_facility);
  //     }

  //     dispatch(
  //       setData({
  //         planet_names: Array.from(planetNames),
  //         host_names: Array.from(hostNames),
  //         discovery_year: Array.from(discoveryYear),
  //         discovery_method: Array.from(discoveryMethod),
  //         discovery_facility: Array.from(discoveryFacility),
  //       })
  //     );
  //   };
  //   getData();
  // }, []);
  const tableData = useSelector((store) => store?.dataslice?.tableData);

  return (
    <>
      <div className="w-full h-screen font-monstreat font-[600] flex sm:flex-row flex-col bg-space bg- bg-no-repeat">
        <div className="sm:w-1/2 w-full text-white h-full sm:p-12 p-24  sm:text-[75px] text-[40px]">
          Journey to the Stars: Explore the Vast Archive of NASA Exoplanets
        </div>
        <div className="sm:w-1/2 w-full h-screen flex justify-center  items-center">
          <Link to={"/explore"}>
            {tableData?.length > 1 ? (
              <button className="bg-inherit border-[1px] text-white sm:px-4 sm:text-[25px] text-[20px] p-2">
                Get Started
              </button>
            ) : (
              <RotatingLines
                strokeColor="white"
                strokeWidth="2"
                animationDuration="0.9"
                width="50"
                visible={true}
              />
            )}
          </Link>
        </div>
      </div>
    </>
  );
};

export const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
    ],
  },
]);
