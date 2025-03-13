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
      </main>
    </>
  )
}

export default App
