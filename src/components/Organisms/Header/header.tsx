import "./header.scss";
import "../../Atoms/buttons/button";
import LinkCustom from "../../Atoms/link/link";

function Header() {
  return (
    <header className="header">
      <nav>
        <LinkCustom text="Home" destination="" />
        <LinkCustom text="Videos" destination="videos" />
        <LinkCustom text="Lives" destination="lives" />
      </nav>
    </header>
  );
}

export default Header;
