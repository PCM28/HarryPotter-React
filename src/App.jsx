import './App.scss';
import HarryPotter from './components/HarryPotter_Axios/HarryPotter';
import {Routes, Route} from 'react-router-dom'
import Gryffindor from './components/Componentes_Houses/Gry/Gryffindor';
import Slytherin from './components/Componentes_Houses/Sly/Slytherin';
import Ravenclaw from './components/Componentes_Houses/Rav/Ravenclaw';
import Hufflepuff from './components/Componentes_Houses/Huf/Hufflepuff';
import Logo from './components/Logo/Logo';
import NavBar from './components/NavBar/NavBar';
// import Axios from './components/Axios_Fetch/Axios';
// import UseEffect from './components/Axios_Fetch/UseEffect';

function App() {
  return (
    <div className="App">
      <Logo/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HarryPotter/>} exact></Route>
        <Route path="/gryffindor" element={<Gryffindor/>} exact></Route>
        <Route path="/slytherin" element={<Slytherin/>} exact></Route>
        <Route path="/ravenclaw" element={<Ravenclaw/>} exact></Route>
        <Route path="/hufflepuff" element={<Hufflepuff/>} exact></Route>
        {/* <Route path="*" element={<NotFound/>} exact></Route> */}
      </Routes>
      {/* <HarryPotter/> */}
      {/* <Axios/> */}
      {/* <UseEffect/> */}
    </div>
  );
}

export default App;
