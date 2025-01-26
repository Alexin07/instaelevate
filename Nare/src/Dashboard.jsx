import React, { useContext, useEffect, useState } from "react";
import Data from "./Data";
import { MainContext } from "../Main";
import axios from "axios";

const Dashboard = () => {
  const { PaymentBaseUrl, BackendBaseUrl } = useContext(MainContext)
  const [OrderData, SetOrderData] = useState([])



  useEffect(() => {
    axios.get(BackendBaseUrl + "/dashboard")
      .then((success) => {
        SetOrderData(success.data.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])



  return (
    <div className="p-3">
      <div className=" w-full  mb-3 rounded-lg border shadow-md flex items-center justify-center text-lg text-gray-500 font-bold py-1.5 ">
        Dashboard
      </div>
      <Data OrderData={OrderData} />
      <div className="flex items-center justify-center mt-10">
        <h1 className="text-gray-500 text-[11px]	">Powered by </h1>
        <span className="ml-1 font-bold -mt-0.5 text-gray-500 text-[13px]	">
          pspna
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
