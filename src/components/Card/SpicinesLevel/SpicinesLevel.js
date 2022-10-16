import "./SpicinesLevel.scss";

import {GiChiliPepper, GiBurningSkull} from "react-icons/gi";

export function Spicy(props) {
  return <div className="spicines-level">
    <GiChiliPepper size={30}/>
  </div>;
}

export function SpicyHigh(props) {
  return <div className="spicines-level spicines-level__high">
        <GiChiliPepper size={30} id="level-high__first"/>
        <GiChiliPepper size={30} id="level-high__second"/>
  </div>;
}

export function SpicyExtream(props) {
  return <div className="spicines-level">
        <GiBurningSkull size={30}/>
  </div>;
}
