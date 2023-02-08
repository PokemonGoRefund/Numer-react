import './App.css';
import Course from './pages/Course';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Bisection from './course/Bisection';
import Falseposition from './course/Falseposition';
import Onepoint from './course/Onepoint';
import Newton from './course/Newton';
import Secant from './course/Secant';
import Inpolation from './course2/Inpolation';
import Lagrange from './course2/Lagrange';
import Crammer from './course3/Crammer';
import Gaussjordan from './course3/Gaussjordan';
import Gausselimination from './course3/Gausselimination';
import Regression from './course4/Regression';
import Courseofroot from './pageroot/Courseofroot';
import Courseofalgebra from './pageroot/Courseofalgebra';
import Courseofpolation from './pageroot/Courseofpolation';
import Courseofregression from './pageroot/Courseofregression';

function App() {
  return (
    <div>
        <Router>
          <Routes>        
              <Route path='/' element={<Course />} />

              <Route path='/courseofroot' element={<Courseofroot />} /> 
              <Route path='/courseofalgebra' element={<Courseofalgebra />} /> 
              <Route path='/courseofpolation' element={<Courseofpolation />} />    
              <Route path='/courseofregression' element={<Courseofregression />} /> 

              <Route path='/courseofroot/bisection' element={<Bisection />} />
              <Route path='/courseofroot/falseposition' element={<Falseposition />} />
              <Route path='/courseofroot/Onepoint' element={<Onepoint />} />
              <Route path='/courseofroot/Newton' element={<Newton />} />
              <Route path='/courseofroot/Secant' element={<Secant />} />

              <Route path='/Courseofalgebra/Crammer' element={<Crammer />} />
              <Route path='/Courseofalgebra/Gausselimination' element={<Gausselimination />} />
              <Route path='/Courseofalgebra/Gaussjordan' element={<Gaussjordan />} />

              <Route path='/courseofpolation/Inpolation' element={<Inpolation />} />
              <Route path='/courseofpolation/Lagrange' element={<Lagrange />} />

              <Route path='/courseofregression/Regression' element={<Regression />} />
              
            </Routes>
        </Router>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <h2>
    //       Numerical Method
    //     </h2>
    //   </header>
    //   <div className='App-grid'>
    //     <div className='App-block'>
    //     <Button type="primary" > Root Of Equation Content </Button>
    //     <Link to="./RootEquation" ><Button style={{backgroundColor: 'gray'}} > Root Of Equation Content </Button></Link>
    //     </div>
    //     <div className='App-block'>
    //       1235
    //     </div>
    //     <div className='App-block'>
    //       1235
    //     </div>
    //     <div className='App-block'>
    //       1235
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
