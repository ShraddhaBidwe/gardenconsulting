import './App.css';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Services from './Components/Services';
import Banner from './Components/Banner';
import ServicesCards from './Components/ServicesCards';
import Quote from './Components/Quote';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Services />
      <Banner />
      <ServicesCards />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
