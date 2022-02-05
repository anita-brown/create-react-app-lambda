import './Repository';
import man from '../asset/img/man.jpeg'

const Repository = () => {
    return (
        <section>

            <div>
                <p>angular/<span>angular</span></p>
                <p className='btn-repo'>Public</p>
            </div>
            
            <div>
                <button className='btn'>master</button>

                <button className='btn'>Go to file</button>
                <button className='btn'>Add file</button>
                <button className='btn'>Code</button>
                <div>

                    <div className='container'>
                        <div>
                            <img src="" alt="" />
                            <p>commits</p>
                        </div>

                    </div>




                </div>


                <h1>Contributors</h1>

                <div>
                    <img className='img-container' src={man} alt="" />
                    <img className='img-container' src={man} alt="" />
                    <img className='img-container' src={man}alt="" />
                    <img className='img-container' src={man} alt="" />
                    <img className='img-container' src={man}alt="" />
                    <img className='img-container' src={man} alt="" />
                    <img className='img-container' src={man} alt="" />
                    <img className='img-container' src={man} alt="" />
                    <a href="https://github.com/angular/angular/graphs/contributors"><p>+ 1,529 contributors</p></a>
                </div>
                <p>Languages</p>
                <div className='lang-repo'>
                    <p className='color-repo'></p>
                    <p>Javascript</p>
                </div>



                <div>




                </div>





            </div>


        </section>
    )
}

export default Repository;