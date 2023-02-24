import Customers from "./componenets/customers/Customers";
import Footar from "./componenets/footar/Footar";
import Home from "./componenets/home/Home";
import Innovation from "./componenets/innovation/Innovation";
import NavBar from "./componenets/navBar/NavBar";
import NavBarFootar from "./componenets/navBarFootar/NavBarFootar";
import Reviews from "./componenets/reviews/Reviews";
import Services from "./componenets/services/Services";
import Specialist from "./componenets/specialist/Specialist";
import Subscribe from "./componenets/subscribe/Subscribe";


function App() {
  return (
    <div className="App">
<NavBar/>
<Home/>
<Services/>
<Innovation/>
<Specialist/>
<Customers/>
<Reviews/>
<Subscribe/>
<NavBarFootar/>
<Footar/>
    </div>
  );
}

export default App;
