import './Footer.css'
import angular from '../asset/img/angular.svg'

const Footer = () => {
    return (
        <footer class="footer">
           
                <div class="logo-col">
                    <a href="//https:" class="footer-logo">
                        <img class="logo" src={angular} alt="Omnifood logo" />
                    </a>
                    <p class="copyright">
                        Copyright &copy; <span class="year">2022</span>
                    </p>
                </div>


        </footer>

    )
}
export default Footer;