import PropTypes from "prop-types";

const Card = ({ className, children}) => {
  return (
    <>
      <div  className={` contain border-2 border-black  ${className}`}
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
