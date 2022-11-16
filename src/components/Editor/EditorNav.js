import "./EditorNav.scss";

import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function EditorNav(props) {
  return (
    <div className="editor-nav">
      <h3>Editor</h3>
      <OverlayTrigger placement="top" overlay={<Tooltip><strong>Exit</strong></Tooltip>}>
        <Link to={"/"} className="editor-nav__exit">
          <ImExit size={35} />
        </Link>
      </OverlayTrigger>
    </div>
  );
}
export default EditorNav;
