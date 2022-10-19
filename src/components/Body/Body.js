import "./Body.scss";

import pizza from "../../assets/pizza.png";

import Filter from "../Filter/Filter";
import Card from "../Card/Card";
import Sidebar from "../Header/Header";

function Body(props) {
  return (
    <div className="body">
      <div className="body-img"></div>
      <Sidebar/>
      <div className="body-container">
        <Card img={pizza} title={"Pizza"} price={8} cart spicinesLevel={2}/>
        <Card img={pizza} title={"Pizza"} price={8} spicinesLevel={0}/>
        <Card img={pizza} title={"Pizza"} price={9} spicinesLevel={1}/>
        <Card img={pizza} title={"Pizza"} price={8}/>
        <Card img={pizza} title={"Pizza"} price={9} cart/>
        <Card img={pizza} title={"Pizza"} price={8}/>
        <Card img={pizza} title={"Pizza"} price={10}/>
        <Card img={pizza} title={"Pizza"} price={10}/>
      </div>
    </div>
  );
}
export default Body;