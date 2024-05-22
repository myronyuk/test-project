import './ModalWind.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ModalWind({ call, onDestroy }) {
    if (!call) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-content">
                    <div className='modal-header text-center'>
                        <h2>Залишити заявку на допомогу</h2>
                    </div>
                    <form>
                        <div className='form-group'>
                            <label htmlFor="firstName" className="form-label"></label>
                            <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Ім'я" />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="phoneNumber" className="form-label"></label>
                            <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Номер телефону" />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="notes" className="form-label"></label>
                            <textarea className="form-control" id="notes" name="notes" placeholder="Ваше питання:" />
                        </div>
                        <div className="button-group text-center">
                            <button type="submit" className="btn btn-warning mx-2">Відправити</button>
                            <button type="button" className="btn btn-secondary mx-2" onClick={onDestroy}>Скасувати</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
