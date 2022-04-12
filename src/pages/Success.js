import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="checkoutSection">
      <h1 className="checkout-price">Success</h1>
      <h2 className="checkout-price">Thank you for your purchase!</h2>
      <Link to="/" className="btn_success">Volver Al Inicio</Link>
    </div>
  );
};

export default Success;
