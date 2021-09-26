import fetch from 'node-fetch';

if (!globalThis.fetch) {
	globalThis.fetch = fetch;
}



// const response = await fetch('http://api.weatherapi.com/v1/current.json?key=f11af4fbafa6458589a180248212409&q=London&aqi=no');


const test = async (location) => {

const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f11af4fbafa6458589a180248212409&q=${location}&days=4&aqi=no&alerts=no`);
const body = await response.json();

const forcastList = body["forecast"]["forecastday"]

const data = []

forcastList.map((forcast)=>{
    const weather = {
        date : forcast["date"],
        temp_f : forcast["day"]["maxtemp_f"],
        temp_c : forcast["day"]["maxtemp_c"],
        wind_mph : forcast["day"]["maxwind_mph"],
        daily_chance_of_rain: forcast["day"]["daily_chance_of_rain"],
        prediction : forcast["day"]["condition"]["text"]
    }
    data.push(weather)
})
  return data
}

const aa = await test("Bangalore")
console.log(aa)

// console.log(forcastList[0]);



// const TeachableMachine = require("@sashido/teachablemachine-node");

// const model = new TeachableMachine({
// //   modelUrl: "https://teachablemachine.withgoogle.com/models/r6BBk-hiN/"
//   modelUrl: "https://teachablemachine.withgoogle.com/models/CDmA4qeRa/"
// });

// const imgUrl = "https://thisistesting.sgp1.digitaloceanspaces.com/anatomy/rickWallpaper.jpg"

// model.classify({
//   imageUrl: imgUrl,
// }).then((predictions) => {
//   console.log("Predictions:", predictions);
// }).catch((e) => {
//   console.log("ERROR", e);
// });
