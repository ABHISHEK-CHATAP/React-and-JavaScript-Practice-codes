
// Using - CHATGpt

import React, { useState } from "react";
const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "Pakistan",
    value: "PK",
    cities: ["Lahore", "Karachi"],
  },
  {
    name: "Bangladesh",
    value: "BG",
    cities: ["Dhaka", "Chittagong"],
  },
];


const App = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    
    // Event handler for when a country is selected
    const handleCountryChange = (event) => {
      setSelectedCountry(event.target.value);
      // Reset the selected city when the country changes
      setSelectedCity("");
    };
    
    // Event handler for when a city is selected
    const handleCityChange = (event) => {
      const selectedCityValue = event.target.value;
      setSelectedCity(selectedCityValue);
    };
  return (
    <div>
      <h2>Country and City Selection</h2>
    
    <div>
      <label htmlFor="selectCountry">Select a country:</label>
      <select id="selectCountry" onChange={handleCountryChange} value={selectedCountry}>
        <option value="">Select Country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.value}>{country.name}</option>
        ))}
      </select>

        <div>
          <label htmlFor="selectCity">Select a city:</label>
          <select id="selectCity" onChange={handleCityChange} value={selectedCity}>
            <option value="">Select City</option>
            {countries.find((country) => country.value === selectedCountry)?.cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>
   
    </div>
    </div>
  );
};

export default App


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   /   /   
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   /   /   
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   /   /   


// Using -ME

// import { useState } from "react";

// const countries = [
//   {
//     name: "India",
//     value: "IN",
//     cities: ["Delhi", "Mumbai"],
//   },
//   {
//     name: "Pakistan",
//     value: "PK",
//     cities: ["Lahore", "Karachi"],
//   },
//   {
//     name: "Bangladesh",
//     value: "BG",
//     cities: ["Dhaka", "Chittagong"],
//   },
// ];

// const index = () => {

//     const [cityName , setCityName] = useState("");
//     const [cities, setCities] = useState("");
//     // console.log("cityname", cityName)

//     const cityData = countries.find(c => c.value === cityName )
//     // console.log("find cities", cityData)

//     // console.log("city", cityData?.cities)
   
//     const city = cityData?.cities.map(c => (c));
//     // console.log("map data", city)

//   return (
//     <>
//       <div style={{position:"absolute",top:"50%",left:"50%"}}>
//         {/* 1st - dropdown  */}
//         <select name="country" id="country" value={cityName} onChange={(e)=>setCityName(e.target.value)} >
//         <option value="">-- select country --</option>
//           {countries.map((country,idx) => {
//             return <option value={country.value} key={idx} >{country.name}</option>;
//           })}
//         </select>
//         {/* 2nd - dropdown  */}
//         <select name="" id="" value={cities} onChange={(e)=>setCities(e.target.value)}>
//         <option value="">-- select city --</option>
//           { city?.map((city,idx)=>{
//                 return <option value={city} key={idx}>{city}</option>
//             })  }
//         </select>
//       </div>
//     </>
//   );
// };

// export default index;
