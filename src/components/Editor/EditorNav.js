import "./EditorNav.scss";

import { ImExit } from "react-icons/im";
import {Link} from 'react-router-dom'

function EditorNav(props) {
  return (
    <div className="editor-nav">
      <h3>Editor</h3>
      <Link to={"/"} className="editor-nav__exit">
        <ImExit size={35}/>
      </Link>
    </div>
  );
}
export default EditorNav;
