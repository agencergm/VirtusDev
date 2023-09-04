import PropTypes from "prop-types";

const Card = ({ className, children}) => {
  return (
    <>
      <div className={`${className}`}
    >
       {children}
      </div>
    </>
  );
};


Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };
export default Card;
