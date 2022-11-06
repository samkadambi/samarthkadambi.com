import '../src/style/App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Pages } from '@material-ui/icons';
import {Helmet} from "react-helmet";

function App() {
  require('react-dom');
  return (
    <div className="App"> 
    <Helmet>
      <meta charSet='utf-8' />
      <title> Samarth Kadambi - Welcome!</title>
      <link rel="canonical" href='samarthkadambi.com'/>
      <meta name="description" content='Samarth Kadambi - Welcome!' />
    </Helmet>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
