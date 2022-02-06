import React from 'react'
import './Contributors.css'
import man from '../asset/img/man.jpeg'
import { Link } from 'react-router-dom'

const Contributors = () => {
    return (
        <section id="contributors">
            <div className='contribution-header'>
                <h1 className='header'>Contributors</h1>
                <div>
                   
                    <div className='dropdown-header'>
                        <input className='search-header' placeholder='search...' type="text" id="" />
                        <button className='btn-search'>Search</button>
                  <div class="dropdown">
                    <button class="dropbtn">Filter</button>
                    <div class="dropdown-content">
                        <a href="//">Highest Contributions</a>
                        <a href="//">Highest followers</a>
                                <a href="//">Public repos</a>
                                <a href="//">Gists published</a>
                    </div>
                </div>
                    </div>  
                </div>

            </div>
            <div className="wrapper">
                <div className="container">
                    <Link to="/userprofile"><img className="img-container" src={man} alt="img"></img></Link>

                    <div className="paragraph">
                        <h2>John Doe </h2>
                        <p>
                            <em>Jigman</em>
                        </p>
                        <Link to ="/userprofile">
                            <button className="btn">Profile</button>
                        </Link>
                    </div>
                </div>

                <div className="container">
                    <img className="img-container" src={man} alt="img"></img>

                    <div className="paragraph">
                        <h2>John Doe </h2>
                        <em>Jigman</em>
                        <div>
                            <button className="btn">Profile</button>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <img className="img-container" src={man} alt="img"></img>

                    <div className="paragraph">
                        <h2>John Doe </h2>
                        <em>Jigman</em>
                        <div>
                            <button className="btn">Profile</button>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <img className="img-container" src={man} alt="img"></img>

                    <div className="paragraph">
                        <h2>John Doe </h2>
                        <em>Jigman</em>
                        <div>
                            <button className="btn">Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contributors;