// import showcase from '../asset/showcase.png'
import angular from '../asset/img/angular.svg'
import './Navbar.css';
import About from './About';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/">
            <img className='img-nav' src={angular} alt="img" /></Link>
            <div className=' navbar-list'>

                <ul>
                    <Link to="/"><li>Home</li></Link> 
                    {/* <a href=""><li>About</li></a> */}
                    <Link to="/contributors"><li>Contributors</li></Link> 

                </ul>


            </div>

        </div>
    )
}

export default Navbar
