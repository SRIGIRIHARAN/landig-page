import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/FooterSection/Footer';
import Game from './components/GameCard/Game';
import GameHero from './components/GameHero/GameHero';
import HeroSection from './components/Hero/HeroSection';
import Nft from './components/NftCard/Nft';
import PlayBackground from './components/PlayBackground/PlayBackground';
import Snapit from './components/SnapitCard/Snapit';

function App() {
  return (
    <div className='page-div'>
      <HeroSection />
      <Snapit/>
      <Game />
      <GameHero />
      <Nft />
      <PlayBackground />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
