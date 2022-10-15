import "./Body.scss";

import pizza from "../../assets/pizza.jpg";

import Filter from "../Filter/Filter";
import Card from "../Card/Card";
import Sidebar from "../Header/Header";

function Body() {
  return (
    <div className="body">
      <div className="body-img"></div>
      <Sidebar/>
      <div className="body-container">
        <Card img={pizza} cart/>
        <Card img={pizza}/>
        <Card img={pizza}/>
        <Card img={pizza}/>
        <Card img={pizza}/>
        <Card img={pizza}/>

      </div>
    </div>
  );
}
export default Body;
