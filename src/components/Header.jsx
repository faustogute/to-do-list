import PropTypes from "prop-types";
import Boton from "./Boton";

const Header = ({ titulo }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h2>{titulo}</h2>
      <Boton color="green" text="Nueva" onClick={onClick} />
    </header>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Header;
