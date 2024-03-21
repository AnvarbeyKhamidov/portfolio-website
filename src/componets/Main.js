import React from 'react';
import './main.css';

function Main(props) {
    return (
        <>
          <div className="container ">
              <div className="header d-flex justify-content-between align-items-center">
                  <h1>Denis <br/> Novik</h1>
                  <p>UX | UI designer <br/>
                  24 years old, Minsk</p>

                  <b><span>RU</span> | ENG</b>
              </div>

              <div className="main__img">
                  <img src="./images/denis.jpg" alt=""/>
              </div>

          </div>


            <div className="main__about text-center">
                <h2>About me</h2>
                <p>
                    Hi, I'm Denis – UX/UI designer from Minsk.
                    I'm interested in design and everything connected with it.
                    <br/>
                    <br/>
                    <br/>

                    I'm studying at courses "Web and mobile design
                    interfaces" in IT-Academy.
                    <br/>
                    <br/>
                    <br/>
                    Ready to implement excellent projects
                    with wonderful people.
                </p>
            </div>

            <div className="container ">
                <div className="main__cards">
                    <div className="cards__header text-center">
                        <h2>Skills</h2>

                        <p>I work such programs as</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card text-center border-0">
                                <div className="card-body">
                                <img src="./images/ps.svg" alt="PS"/>
                                <p className="mt-3 mb-0">Adobe <br/> Photoshop</p>
                                <div className="starts mt-3">
                                    <img src="./images/stblc.svg" className="mr-2" alt="Star"/>
                                    <img src="./images/stblc.svg" className="mr-2" alt="Star"/>
                                    <img src="./images/stblc.svg" className="mr-2" alt="Star"/>
                                    <img src="./images/stblc.svg" className="mr-2" alt="Star"/>
                                    <img src="./images/Star (1).svg" alt="Star"/>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card text-center border-0">
                                <div className="card-body">
                                    <img src="./images/ai.svg" alt="AI"/>
                                    <p className="mt-3 mb-0">Adobe <br/> Illustrator</p>
                                    <div className="starts mt-3">
                                        <img src="./images/stblc.svg" className="mr-2" alt="Star"/>
                                        <img src="./images/stblc.svg" className="mr-2" alt="Star"/>
                                        <img src="./images/stblc.svg" className="mr-2" alt="Star"/>
                                        <img src="./images/Star (1).svg" className="mr-2" alt="Star"/>
                                        <img src="./images/Star (1).svg" alt="Star"/>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card text-center border-0">
                                <div className="card-body">
                                    <img src="./images/ae.svg" alt="AE"/>
                                    <p className="mt-3 mb-0">Adobe <br/> After Effects</p>
                                    <div className="starts mt-3">
                                        <img src="./images/stblc.svg" className="mr-2" alt="Star"/>
                                        <img src="./images/stblc.svg" className="mr-2" alt="Star"/>
                                        <img src="./images/stblc.svg" className="mr-2" alt="Star"/>
                                        <img src="./images/stblc.svg" className="mr-2" alt="Star"/>
                                        <img src="./images/Star (1).svg" alt="Star"/>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card text-center border-0">
                                <div className="card-body card__last">
                                    <img src="./images/fig.svg" alt="PS"/>
                                    <p className="mt-3 mb-0">Figma</p>
                                    <div className="starts mt-5">
                                        <img src="./images/stblc.svg" className="mr-2" alt="Star"/>
                                        <img src="./images/stblc.svg" className="mr-2" alt="Star"/>
                                        <img src="./images/stblc.svg" className="mr-2" alt="Star"/>
                                        <img src="./images/stblc.svg" className="mr-2" alt="Star"/>
                                        <img src="./images/Star (1).svg" alt="Star"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container">
                    <h2 className="text-center">Portfolio</h2>
                    <div className="portfolio__img">
                        <img src="./images/girl.jpg" alt="Girl"/>
                    </div>
                    <p><u>Online fashion store - Homepage</u></p>

                    <div className="portfolio__img">
                        <img src="./images/reeb.jpg" alt="Rebook"/>
                    </div>
                    <p><u>Reebok Store - Concept</u></p>

                    <div className="portfolio__img">
                        <img src="./images/cam.jpg" alt="Rebook"/>
                    </div>
                    <p><u>Braun Landing Page - Concept</u></p>

                </div>

            </div>
        </>
    )
}

export default Main;