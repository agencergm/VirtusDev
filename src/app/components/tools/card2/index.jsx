import PropTypes from "prop-types";

const Card2 = ({ className, children}) => {
  return (
    <>
      <div  className={` contain  ${className}`}
    >
       {children}
      </div>
    </>
  );
};


Card2.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };
export default Card2;
