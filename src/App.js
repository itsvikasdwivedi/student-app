import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ImageIcon from './Components/ImageIcon';
import Slider from './Components/Slider';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageIcon />
      <Slider/>
      <Footer />
    </div>
  );
}

export default App;