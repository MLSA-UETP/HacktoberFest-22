import { useNavigate, Link } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className="display-6">
            <h1>404</h1>
            <p>This page doesn't Exists....</p>
            <button
                className="btn btn-lg btn-primary text-white"
                onClick={() => {
                    navigate(-1);
                }
                }>Go Back</button>
            <div>
                <p>
                    We have two counters, one made with Class Component and the other one in
                    Functional Components .Where do you want to go?
                </p>
                <ul className=''>
                    <li className=''>
                        <Link to='/class-counter' className=''>Class Counter</Link>
                    </li>
                    <li className=''>
                        <Link to='/functional-counter' className=''>Functional Counter</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Error;