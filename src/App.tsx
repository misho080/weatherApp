import mainLogo from "./assets/logo.png"
import inputSearchIcon from "./assets/search.png"
import cloudyIcon from "./assets/Cloudy.png"

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
                    <div>
                      <span>Temp max</span>
                      <div>
                        <p>19°</p>
                        <img src="" alt="" />
                      </div>
                    </div>
              </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
