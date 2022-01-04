import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './components/common/Header';
// import Footer from './components/common/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import Error from './components/pages/Error';
import ImageDetail from './components/pages/ImageDetail';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route  path="/home" exact component ={Home} />
          <Route path="/image/:id/:w/:h"  component={ImageDetail} />
          <Route component={Error} />
        </Switch>
        {/* <Footer/> */}
      </Router>
      
      
    </div>
  );
}

export default App;
