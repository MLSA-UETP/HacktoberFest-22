import Counter1 from './classComponents/Counter1';
import Counter2 from './functionalComponents/Counter2';
import Error from './Error';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

const App = () => {
    return(
        <Router>
            
            <nav>
                <ul className='nav nav-tab bg-light justify-content-center'>
                    <li className='nav-item'>
                        <Link to='/class-counter' className='nav-link'>Class Counter</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link to='/functional-counter' className='nav-link'>Functional Counter</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/class-counter' element={ <Counter1 /> } />
                <Route path='/functional-counter' element={ <Counter2 /> } />
                <Route path='*' element={ <Error />} />
            </Routes>
            
        </Router>
    );
}

export default App;