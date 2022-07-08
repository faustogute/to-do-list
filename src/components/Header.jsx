import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ titulo, onAdd, showAdd }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h2>{titulo}</h2>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Cerrar" : "Nueva"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Header;
