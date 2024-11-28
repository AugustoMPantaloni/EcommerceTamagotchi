import logo from "../../../assets/logo.png";  
import "./Logo.css";

const Logo = ({ className }) => {
    return <img src={logo} alt="Logo" className={className} />;
};

export default Logo;