import React, { useState } from "react";
import axios from "axios";

const URL = "https://mocki.io/v1/31b71307-8ece-4b9c-bf14-99cc3c03f495";

const View = () => {
  const [queryData, setQueryData] = useState(undefined);
  const [selectedData, setSelectedData] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const [type, setType] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [input, setInput] = useState("");

  const getData = () => {
    axios.get(URL).then((response) => {
      const dataParsed = JSON.parse(response.data.data);
      console.log({ dataParsed });
      setQueryData(dataParsed);
    });
  };

  // console.log({ queryData });

  return (
    <>
      <div className="h-screen bg-[#1D2A3F] w-[60px] flex justify-center py-4">
        <div
          onClick={() => {
            setQueryData(undefined);
            setSelectedData(undefined);
            setIsOpen(false);
            setShowPage(true);
          }}
          className="bg-white h-fit p-4 w-full cursor-pointer"
        >
          &#128269;
        </div>
      </div>
      {showPage && (
        <div className="flex flex-col gap-y-12 flex-1 w-screen h-screen p-12">
          
          <div className="flex flex-col gap-y-2">
            <h1>Search</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              repellat reprehenderit vel.
            </p>
          </div>
          <div className="flex flex-col w-11/12 px-12 max-h-[calc(100vh - 300px)] overflow-hidden">

            {/* SEARCH PARAMS */}
            <div className="flex justify-between gap-x-4 w-full">
              <select
                id="type"
                name="type"
                className="bg-grey-300 border rounded-md p-2 flex flex-1"
                onChange={(e) => setType(e.target.value)}
                value={type}
              >
                <option value="Choose Type">Choose Type</option>
                <option value="Email">Email</option>
                <option value="Full Name">Full Name</option>
                <option value="Address">Address</option>
              </select>
              <select
                id="email"
                name="email"
                className="bg-grey-300 border rounded-md p-2 flex flex-1"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              >
                <option value="Choose Email" default>
                  Choose Email
                </option>
                <option value="test@email.com">test@email.com</option>
                <option value="test2@gmail.com">test2@gmail.com</option>
                <option value="test3@email.com">test3@email.com</option>
              </select>
              <input
                type="text"
                placeholder="test@email.com"
                className="bg-grey-300 border rounded-md p-2 flex flex-1"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <button
                onClick={() => {
                  setQueryData(undefined);
                  setSelectedData(undefined);
                  setIsOpen(false);
                  setType("Choose Type");
                  setEmail("Choose Email");
                  setInput("");
                }}
                className="px-8 py-2 border rounded-md"
              >
                Reset
              </button>
              <button
                onClick={() => getData()}
                className="rounded-md py-2 bg-[#1D2A3F] text-white px-8"
              >
                &#128269; Search
              </button>
            </div>
            {/* END OF // SEARCH PARAMS */}


            {/* TABLE VIEW */}
            <div className="w-full bg-gray-300 mt-12 overflow-scroll ">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-200">
                    <th>Full Name</th>
                    <th>Username</th>
                    <th>Dob</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Employment Title</th>
                    <th>Employer Name</th>
                  </tr>
                </thead>
                <tbody>
                  {queryData
                    ? queryData?.map((data, i) => (
                        <tr>
                          <td
                            className="font-bold cursor-pointer"
                            onClick={() => {
                              setIsOpen(!isOpen);
                              setSelectedData(data);
                            }}
                          >
                            <span
                              className={isOpen ? "transform rotate-90" : ""}
                            >
                              &rsaquo; {isOpen}
                            </span>
                            {data.tool_name}  ({data.data.length})
                          </td>
                        </tr>
                      ))
                    : "Click search to get data."}
                  {isOpen &&
                    selectedData.data.map((childRow) => (
                      <tr className="odd:bg-white even:bg-slate-1000 border">
                        <td>{childRow?.full_name}</td>
                        <td>{childRow?.username}</td>
                        <td>{childRow?.dob}</td>
                        <td>{childRow?.address}</td>
                        <td>{childRow?.email}</td>
                        <td>{childRow?.phone_number}</td>
                        <td>{childRow?.employment_title}</td>
                        <td>{childRow?.employer_name}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            {/* END OF// TABLE VIEW */}

          </div>
        </div>
      )}
    </>
  );
};

export default View;
