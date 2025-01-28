import React, { useContext, useEffect, useState } from "react";
import Data from "./Data";
import { MainContext } from "../Main";
import axios from "axios";

const Dashboard = () => {
  const { PaymentBaseUrl, BackendBaseUrl } = useContext(MainContext)
  const [OrderData, SetOrderData] = useState([])



 const fetchOrderData = () => {
    axios
      .get(BackendBaseUrl + "/dashboard")
      .then((success) => {
        SetOrderData(success.data.data); // स्टेट अपडेट करें
      })
      .catch((err) => {
        console.log(err);
      });
  };

   useEffect(() => {
    fetchOrderData(); // माउंट पर डेटा लोड करें
  }, []);


    const deleteSubmitHandler = (id) => {
      axios.delete(BackendBaseUrl + "/delete/order", {
        params: { id: id },
      })
        .then((response) => {
          console.log(response);
          alert('Order deleted successfully');
          fetchOrderData()
        })
        .catch((error) => {
          console.error(error);
          alert('Error deleting order');
        });
    };
const deleteDataHandler = () => {
    axios.get(BackendBaseUrl + "/order" + "/delete-many")
      .then((success) => {
        console.log(success);
        alert('Orders deleted successfully');
        fetchOrderData()
      }).catch((err) => {
        console.log(err);
      })

  }
  return (
    <div className="p-3">
     <div className="w-full mb-3 rounded-lg border shadow-md flex items-center justify-between text-lg text-gray-500 font-bold py-1.5 px-4">
        <span className="flex-grow text-center">Dashboard</span>
        <MdDelete className="w-fit text-xl text-blue-500 hover:text-red-600" onClick={deleteDataHandler} />
      </div>
      <Data OrderData={OrderData} deleteSubmitHandler={deleteSubmitHandler} />
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
