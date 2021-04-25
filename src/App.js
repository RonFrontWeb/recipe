import './App.scss';

import SideTopNav from './components/SideTopNav';
import TopNavigation from './components/TopNavigation';
import Recipes from './pages/Recipes';
import {Router } from "@reach/router"
import Admin from './pages/Admin';
import FormRecipe from './components/FormRecipe';

function App() {
  return (
    <div className="App">
      <TopNavigation/>
      <div className="App__gridContainer">
        <div className="App__columnOne">
          <SideTopNav url="/Admin" icon={<svg viewBox="0 0 24 24"><path d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z"></path></svg>} title="admin"/>
         <SideTopNav url="/Recipes" icon={<svg viewBox="0 0 24 24"><path d="M15,20A1,1 0 0,0 16,19V4H8A1,1 0 0,0 7,5V16H5V5A3,3 0 0,1 8,2H19A3,3 0 0,1 22,5V6H20V5A1,1 0 0,0 19,4A1,1 0 0,0 18,5V9L18,19A3,3 0 0,1 15,22H5A3,3 0 0,1 2,19V18H13A2,2 0 0,0 15,20M9,6H14V8H9V6M9,10H14V12H9V10M9,14H14V16H9V14Z"></path></svg>} title="recipes"/>
          <SideTopNav url="/NewRecipe" title="FORM"/>
        </div>
        <div className="App__columnTwo">
          <Router>
            <Admin path="/Admin"/>
            <Recipes path="/Recipes"/>
            <FormRecipe path="/NewRecipe"/>
          </Router>
        </div>

        {/* <h1>Column one</h1>
        <h1>Column two</h1> */}
      </div>
    </div>
  );
}

export default App;
