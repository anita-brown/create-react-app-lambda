// import showcase from '../asset/showcase.png'
import angular from '../asset/img/angular.svg'
import './Navbar.css';
import About from './About';


const Navbar = () => {
  return (
      <div className='navbar'>
          <img className='img-nav' src={ angular }alt="img" />
          <div className=' navbar-list'>
              
              <ul>
                  <a href="http://"><li>Home</li></a>
                  <a href={About}><li>About</li></a>
                  <a href="http://"> <li>Contributors</li></a>
                
                  </ul>
              
              
      </div>
      
      </div>
  )
}

export default Navbar
