import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import ModalWind from '../../Components/Modal/ModalWind';
import { Link } from 'react-router-dom';

import {useState} from 'react';


function Main(){
    const [modalState, setModalState] = useState(false);



    return (
        <>
        <ModalWind call={modalState} onDestroy={()=>setModalState(false)}/>
        <div className='Main'>
            <div className='container'>
                <div className='row  text-center justify-content-center'>
                    <div className='col-md-12'>
                    <h2 className="" >Логістична компанія</h2>
                        <h1 className="" >Логістика з відповідальністю</h1>
                        <p className="" >Допоможемо організувати логічне перевезення військової амуніції, одягу, техніки. <br />
                        На ринку логістичних перевезень більше 10 років.</p>
                    </div>
                    <div className="row justify-content-center ">
                        <div className="col-auto">
                        <Link to="/delivery">
                        <button type="button" className="btn btn-outline-warning">Вартість доставки</button>
                        </Link>
                        </div>
                        <div className="col-auto">
                        <button type="button" className="btn btn-outline-warning" onClick={()=> setModalState(true)}>Зв'язатися з нами</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Main;
