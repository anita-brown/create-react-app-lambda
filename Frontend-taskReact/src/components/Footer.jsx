import "./Footer.css";
import angular from "../asset/img/angular.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-col">
        <a href="//https:" className="footer-logo">
          <img className="logo" src={angular} alt="Omnifood logo" />
        </a>
        <p className="copyright">
          Copyright &copy; <span className="year">2022</span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
