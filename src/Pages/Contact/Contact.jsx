import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../../Components/Form';

function Contact(){
    return (
        <>
            <div className='Contact section_padding'>
                <div className='container'>
                    <h2 className="contact-welcome text-center mb-4">Щось не розібрався? Пиши... Ми допоможимо</h2>
                    <Form />
                </div>
            </div>
        </>
    );
}

export default Contact;
