import './App.css';
import NavBar from './components/NavBar/NavBar';
import { themeColors } from './data/appColors';
import styled from 'styled-components';
import Footer from './components/Footer/Footer';
import InfoSection from './pages/InfoSection';
import Header from './components/Header/Header';
import ParralaxCards from './pages/ParralaxCards';
import Technologies from './pages/Technologies';
import scrollSpy from './function';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import leftImage from './images/gradient-left-dark-next-ui.svg'
import rightImage from './images/gradient-right-dark-next-ui.svg'
const MainApp = styled.main`
  
  .bg-image-left, .bg-image-right{
      position: absolute;
      z-index: 0;

      img{
        width: 100%;
      }
   }
   .bg-image-right{
      top: 0;
      right: 0;
   }
   .bg-image-left{
      top: 0;
      left: 0;
   }


`
function App() {
  scrollSpy();

  return (
    <>
      <MainApp className="App">
        <div className="bg-image-left">
          <img src={leftImage} alt="left gradient" className="left" />

        </div>
        <div className="bg-image-right">
          <img src={rightImage} alt="left gradient" className="left" />

        </div>
        <NavBar {...themeColors} />
        <Header {...themeColors} />
        <InfoSection {...themeColors} />
        <Technologies {...themeColors} />
        <ParralaxCards {...themeColors} />
        <Contact {...themeColors} />
        <Footer {...themeColors} />
      </MainApp>
    </>
  );
}

export default App;
