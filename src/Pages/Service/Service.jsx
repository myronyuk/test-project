import './Service.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'animate.css';

function Service(){
    return (
        <>
            <div className='Service section_padding'>
                <div className='container'>
                    <div className='welcome-service text-center justify-content-center'>
                        <h2>Наші послуги</h2>
                        <p>Надаємо всі можливі послуги логістики. </p>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className='single-service '>
                            <i class="bi bi-file-earmark-lock"></i>
                                <h4>Повна конфіденційність</h4>
                                <p>Дані наших клієнтів залишаються повністю конфіденційними і закрити від інших осіб.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className='single-service '>
                            <i class="bi bi-calculator-fill"></i>
                                <h4>Розрахунок</h4>
                                <p>Допоможемо розрахувати доставку і підбиремо приємну ціну.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className='single-service'>
                            <i class="bi bi-speedometer2"></i>
                                <h4>Швидкість</h4>
                                <p>Підберемо найшвидний маршут для доставки (середній час достави 2 - 3 дні).</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className='single-service'>
                            <i class="bi bi-tag"></i>
                                <h4>Вигідні умови</h4>
                                <p>Надамо один із прайсів для доставки як і для бізнесу так і для волонтерів і військових.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className='single-service'>
                            <i class="bi bi-house"></i>
                                <h4>Власні склади</h4>
                                <p>Маємо більше 10 сладів де буде отримано і відправлено вашу посилку.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className='single-service' >
                            <i class="bi bi-person-raised-hand"></i>
                                <h4>Підтримка 24/7</h4>
                                <p>Наші менеджери підскажуть, допоможуть і нададуть актуальну інформація  .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
