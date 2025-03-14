import mainLogo from "./assets/Group 165.svg"
import inputSearchIcon from "./assets/fa_search.svg"
import cloudyIcon from "./assets/Cloudy.svg"
import TempMaxIcon from "./assets/Vector.svg"
import windIcon from "./assets/outline (2).svg"
import humadityIcon from "./assets/outline.svg"
import tempMinIcon from "./assets/Vector (1).svg"

function App() {

  return (
    <>
      <header>
        <img src={mainLogo} alt="mainLogo" />
        <form action="">
          <input className="searchInput" type="text" placeholder="Search Location..." />
          <img className="inputSearchIcon" src={inputSearchIcon} alt="inputSearchIcon" />
        </form>
      </header>
      <main>
        <div className="basicInfoContainer">
          <span className="currentTemp">16°</span>
          <div className="cityNameContainer">
            <span className="cityName">London</span>
            <span className="cityDataTime">2025-03-13 07:00</span>
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
                  <span>19°</span>
                  <img src={TempMaxIcon} alt="TempMaxIcon" />
                </div>
              </div>
              <div className="info">
                <span>Temp min</span>
                <div className="infoNumber" >
                  <span >15°</span>
                  <img src={tempMinIcon} alt="tempMinIcon" />
                </div>
              </div>
              <div className="info">
                <span>Humadity</span>
                <div className="infoNumber">
                  <span>58%</span>
                  <img src={humadityIcon} alt="humadityIcon" />
                </div>
              </div>
              <div className="info">
                <span>Cloudy</span>
                <div className="infoNumber">
                  <span>86%</span>
                  <img src={cloudyIcon} alt="cloudyIcon" />
                </div>
              </div>
              <div className="info">
                <span>Wind</span>
                <div className="infoNumber">
                  <span>5km/h</span>
                  <img src={windIcon} alt="windIcon" />
                </div>
              </div>
            </div>
          </div>
          <div className="lastLine"></div>
        </div>

      </main>
    </>
  )
}

export default App
