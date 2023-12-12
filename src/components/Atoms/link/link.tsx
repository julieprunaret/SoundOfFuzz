import { Link } from "react-router-dom";

import "./link.scss";
import "../../Atoms/buttons/button";

interface LinkInterface {
  text: string;
  destination: string;
}

function LinkCustom({ text, destination }: LinkInterface) {
  return (
    <Link to={`/${destination}`} className="link">
      {text}
    </Link>
  );
}

export default LinkCustom;
