import React, { useState } from 'react';
import './Reviews.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './reviws.png';

function Reviews() {
    const [currentImage, setCurrentImage] = useState(null);

    const toggleFullScreen = (imageSrc) => {
        setCurrentImage(imageSrc);
    };

    const closeFullScreen = () => {
        setCurrentImage(null);
    };

    return (
        <>
            <div className='Reviews'>
                <div className='container'>
                    <div className='welcome-Reviews text-center justify-content-center'>
                        <h2>Відгуки наших клієнтів</h2>
                        <p>Сумніваєтеся у нашій роботі? Переглянте відгуки постіних клієнтів. </p>
                    </div>
                    <div className="row text-center">
                        <div className="col-sm">
                            <div className='Reviews-box'>
                                <img src={myImage} className="img-fluid" alt="img" onClick={() => toggleFullScreen(myImage)} />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className='Reviews-box'>
                                <img src={myImage} className="img-fluid" alt="img" onClick={() => toggleFullScreen(myImage)} />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className='Reviews-box'>
                                <img src={myImage} className="img-fluid" alt="img" onClick={() => toggleFullScreen(myImage)} />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className='Reviews-box'>
                                <img src={myImage} className="img-fluid" alt="img" onClick={() => toggleFullScreen(myImage)} />
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-sm">
                            <div className='Reviews-box'>
                                <img src={myImage} className="img-fluid" alt="img" onClick={() => toggleFullScreen(myImage)} />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className='Reviews-box'>
                                <img src={myImage} className="img-fluid" alt="img" onClick={() => toggleFullScreen(myImage)} />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className='Reviews-box'>
                                <img src={myImage} className="img-fluid" alt="img" onClick={() => toggleFullScreen(myImage)} />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className='Reviews-box'>
                                <img src={myImage} className="img-fluid" alt="img" onClick={() => toggleFullScreen(myImage)} />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            {currentImage && (
                <div className="fullscreen-overlay" onClick={closeFullScreen}>
                    <div className="fullscreen-image-container">
                        <img src={currentImage} className="fullscreen-image" alt="Full Screen" />
                    </div>
                </div>
            )}
        </>
    );
}

export default Reviews;
