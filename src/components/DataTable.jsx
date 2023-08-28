import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { dynamicSort } from "../utils/sort";

const DataTable = () => {
  const data = useSelector((store) => store?.dataslice?.filteredData);
  const dispatch = useDispatch();
  if (data.length < 1)
    return (
      <div className="w-full h-screen  flex justify-center items-center font-monstreat sm:text-[20px] text-[14px]">
        No results found
      </div>
    );
  else
    return (
      <div className="w-full p-12">
        <table className="border-[1px] w-full mt-5 h-fit overflow-scroll font-monstreat ">
          <thead>
            <tr className="h-16 border-[1px]">
              <th>
                Planet Name{" "}
                <button
                  onClick={() => {
                    dynamicSort(data, dispatch, "pl_name", "ascending");
                  }}
                >
                  <AiOutlineArrowUp />
                </button>{" "}
                <button
                  onClick={() => {
                    dynamicSort(data, dispatch, "pl_name", "descending");
                  }}
                >
                  <AiOutlineArrowDown />
                </button>
              </th>
              <th>
                Hostname{" "}
                <button
                  nClick={() => {
                    dynamicSort(data, dispatch, "pl_name", "ascending");
                  }}
                >
                  <AiOutlineArrowUp />
                </button>{" "}
                <button
                  nClick={() => {
                    dynamicSort(data, dispatch, "pl_name", "descending");
                  }}
                >
                  <AiOutlineArrowDown />
                </button>
              </th>
              <th>
                Discovery Year{" "}
                <button
                  onClick={() => {
                    dynamicSort(data, dispatch, "disc_year", "ascending");
                  }}
                >
                  <AiOutlineArrowUp />
                </button>{" "}
                <button
                  onClick={() => {
                    dynamicSort(data, dispatch, "disc_year", "descending");
                  }}
                >
                  <AiOutlineArrowDown />
                </button>
              </th>
              <th>
                Discovery Facility{" "}
                <button
                  onClick={() => {
                    dynamicSort(data, dispatch, "disc_facility", "ascending");
                  }}
                >
                  <AiOutlineArrowUp />
                </button>{" "}
                <button
                  onClick={() => {
                    dynamicSort(data, dispatch, "disc_facility", "descending");
                  }}
                >
                  <AiOutlineArrowDown />
                </button>
              </th>
              <th>
                Discovery Method{" "}
                <button
                  onClick={() => {
                    dynamicSort(data, dispatch, "discoverymethod", "ascending");
                  }}
                >
                  <AiOutlineArrowUp />
                </button>{" "}
                <button
                  onClick={() => {
                    dynamicSort(
                      data,
                      dispatch,
                      "discoverymethod",
                      "descending"
                    );
                  }}
                >
                  <AiOutlineArrowDown />
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="sm:text-[16px] text-[10px] font-[500]]">
            {data.map((entry) => (
              <tr key={entry.id} className="border-[1px]">
                <td className="border-[1px] sm:p-2 p-1 text-blue-400">
                  <a
                  target="blank"
                    href={
                      "https://exoplanetarchive.ipac.caltech.edu/overview/" +
                      encodeURIComponent(entry.pl_name) +
                      "#planet_" +
                      encodeURIComponent(entry.pl_name) +
                      "_collapsible"
                    }
                  >
                    {entry.pl_name}
                  </a>
                </td>
                <td className="border-[1px] sm:p-2 p-1">{entry.hostname}</td>
                <td className="border-[1px] sm:p-2 p-1">{entry.disc_year}</td>
                <td className="border-[1px] sm:p-2 p-1">
                  {entry.disc_facility}
                </td>
                <td className="border-[1px] sm:p-2 p-1">
                  {entry.discoverymethod}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default DataTable;
