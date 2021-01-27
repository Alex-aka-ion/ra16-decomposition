import './App.css';
import News from "./components/News";
import Indexes from "./components/Indexes";
import Logo from "./components/Logo";
import AboveSearchLinks from "./components/AboveSearchLinks";
import MainSearchString from "./components/MainSearchString";
import UnderSearchText from "./components/UnderSearchText";
import MainAdvBanner from "./components/MainAdvBanner";
import Weather from "./components/Weather";
import MostViewed from "./components/MostViewed";
import MapLink from "./components/MapLink";
import UnderMapLinks from "./components/UnderMapLinks";
import TvProgram from "./components/TvProgram";
import OnAir from "./components/OnAir";

function App() {
    /*
    * Основной файл. Тут загружаем основные Api и заполняем Context например
    * */
  return (
    <div className="App">
      <News quantity={5}/>
      <Indexes showOnMainScreen={['USD','EUR','OIL']}/>
      <Logo sizeOfLogo={'middle'}/>
      <AboveSearchLinks quantityToShow={7}/>
      <MainSearchString />
      <UnderSearchText />
      <MainAdvBanner bannerSize={'middle'}/>
      <Weather />
      <MostViewed quantity={3}/>
      <MapLink/>
      <UnderMapLinks quantity={1}/>
      <TvProgram latestProgram={3}/>
      <OnAir quantity={3}/>
    </div>
  );
}

export default App;
