import './App.css';
import { Banner, NavBar, Projects, Skills} from './components'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills  />
      <Projects />
    </div>
  );
}

export default App;
