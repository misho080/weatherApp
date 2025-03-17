import mainLogo from "./assets/Group 165.svg"
import inputSearchIcon from "./assets/fa_search.svg"
import cloudyIcon from "./assets/Cloudy.svg"
import TempMaxIcon from "./assets/Vector.svg"
import windIcon from "./assets/outline (2).svg"
import humadityIcon from "./assets/outline.svg"
import tempMinIcon from "./assets/Vector (1).svg"
import { useState } from "react"

// interface Types {
//   city: string;
//   current_temp: number;
//   current_weather_icon: string;
//   current_weather: string;
//   current_time: string;
//   temp_max: number;
//   temp_min: number;
//   humadity: number;
//   cloudy: number;
//   wind_speed: number;


// }

function App() {
  const [data, setData] = useState({
    city: "London",
    temp_max: 80,
    current_temp: 16,
    temp_min: 15,
    hamadity: 58,
    cloudy: 86,
    wind_speed: 5,
    current_time: "0000-00-00/ 00:00"
  })
  const [text, setText] = useState("")

  const handleClick = () => {

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=196cbe371f1c40f9ba3113741241402&q=${text}&days=7&aqi=yes&alerts=no}`)
      .then((res) => res.json())
      .then((data) => {
        const info: any = {
          city: data.location.name,
          current_temp: data.current.temp_c,
          current_weather_icon: data.current.condition.icon,
          current_weather: data.current.condition.text,
          current_time: data.location.localtime,
          temp_max: data.forecast.forecastday[0].day.maxtemp_c,
          temp_min: data.forecast.forecastday[0].day.mintemp_c,
          hamadity: data.current.humidity,
          cloudy: data.current.cloud,
          wind_speed: data.current.wind_kph
        }
        setData(info)
      })
    setText("")
  }





  return (
    <div>
      {
        data &&
        <div>
          <header>
            <img src={mainLogo} alt="mainLogo" />
            <form action="">
              <input onChange={(e) => setText(e.target.value)} className="searchInput" type="text" placeholder="Search Location..." />
              <img onClick={handleClick} className="inputSearchIcon" src={inputSearchIcon} alt="inputSearchIcon" />
            </form>
          </header>

          <main>
            <div className="basicInfoContainer">
              <span className="currentTemp">{data.current_temp}°</span>
              <div className="cityNameContainer">
                <span className="cityName">{data.city}</span>
                <span className="cityDataTime">{data.current_time}</span>
              </div>
              <img className="cloudyIcon" src={cloudyIcon} alt="cloudyIcon" />
            </div>
            <div className="moreInfoContainer">
              <span className="detailsSpan">Weather Details...</span>
              <div className="detailsInfoContainer">
                <p>THUNDERSTORM WITH LIGHT DRIZZLE</p>
                <div className="detailsInfo">
                  <div className="info">
                    <span>Temp max</span>
                    <div className="infoNumber">
                      <span>{data.temp_max}°</span>
                      <img src={TempMaxIcon} alt="TempMaxIcon" />
                    </div>
                  </div>
                  <div className="info">
                    <span>Temp min</span>
                    <div className="infoNumber" >
                      <span >{data.temp_min}°</span>
                      <img src={tempMinIcon} alt="tempMinIcon" />
                    </div>
                  </div>
                  <div className="info">
                    <span>Humadity</span>
                    <div className="infoNumber">
                      <span>{data.hamadity}%</span>
                      <img src={humadityIcon} alt="humadityIcon" />
                    </div>
                  </div>
                  <div className="info">
                    <span>Cloudy</span>
                    <div className="infoNumber">
                      <span>{data.cloudy}%</span>
                      <img src={cloudyIcon} alt="cloudyIcon" />
                    </div>
                  </div>
                  <div className="info">
                    <span>Wind</span>
                    <div className="infoNumber">
                      <span>{data.wind_speed}km/h</span>
                      <img src={windIcon} alt="windIcon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lastLine"></div>
            </div>

          </main>

        </div>

      }

    </div>
  )
}

export default App



