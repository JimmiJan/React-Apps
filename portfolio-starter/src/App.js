import Navbar from "./Components/Navbar/Navbar";
import"./App.css"
import Intro from "./Components/intro/intro";
import Service from "./Components/Services/service";
import Experiece from "./Components/Experience/Experiece";
import Work from "./Components/Work/Work";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Service />
      <Experiece />  
      <Work />
    </div>
  );
}

export default App;
