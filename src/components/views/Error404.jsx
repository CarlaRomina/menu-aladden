import { Button } from 'react-bootstrap';
import error from '../../assets/error404.jpg'
const Error404 = () => {
    return (
        <section className="mainSection text-center">
            <img src={error}  alt="error 404" />
            <div>
            <Button variant='primary' className='mb-4'>Volver al inicio</Button>

            </div>
        </section>
    );
};

export default Error404;