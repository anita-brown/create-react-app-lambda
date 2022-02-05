import './Repository.css';
import man from '../asset/img/man.jpeg'

const Repository = () => {
    return (
        <section>

            <div className='repo-container'>
                <p className='repo-name'>angular/<span>angular</span></p>
                <p className='btn-repo name'>Public</p>
            </div>
               <div className='heading-primary'>
                <div className='heading-secondary'>
                    
                <button className='btn one'>master</button>

                <button className='btn two'>Go to file</button>
                <button className='btn three'>Add file</button>
                <button className='btn four'>Code</button>
                 </div>

            </div>
                <h1 className='heading new'>Contributors</h1>
            <div className='repository-flex'>
                <div>

                    <div className='card-profile box'>
                        <div className='img-profile'>
                            <img className="img-container" src={man} alt="" />
                            <p><span>jiglar</span> commits</p>
                        </div>

                    </div>




                </div>



                <div className='card-profile img'>
                    <img className='img-container' src={man} alt="" />
                    <img className='img-container' src={man} alt="" />
                    <img className='img-container' src={man}alt="" />
                    <img className='img-container' src={man} alt="" />
                    <img className='img-container' src={man}alt="" />
                    <img className='img-container' src={man} alt="" />
                    <img className='img-container' src={man} alt="" />
                    <img className='img-container' src={man} alt="" />
                    <img className='img-container' src={man} alt="" />
                    <img className='img-container' src={man} alt="" />
                    <img className='img-container' src={man} alt="" />
                    <img className='img-container' src={man} alt="" />
                    
                   <a className='contributor-count' href="https://github.com/angular/angular/graphs/contributors">
                    <p>+ contributors</p></a>
                <p className='lang'>Languages</p>
                    <div className='lang-repo word'>
                    <p className='color-repo yellow'></p>
                        <p>Javascript</p>
                        <p className='color-repo blue '></p>
                        <p>Typescript</p>
                        <p className='color-repo purple'></p>
                        <p>CSS</p>
                        <p className='color-repo red'></p>
                        <p>HTML</p>
                        
                </div>
                </div>



                <div>




                </div>





            </div>


        </section>
    )
}

export default Repository;