import './App.css';
import NavBar from './components/NavBar/NavBar';
import { themeColors } from './data/appColors';
import styled from 'styled-components';
import Footer from './components/Footer/Footer';
import InfoSection from './pages/InfoSection';
import Header from './components/Header/Header';
import ParralaxCards from './pages/ParralaxCards';
import Technologies from './pages/Technologies';
const MainApp = styled.main`
  

`
function App() {

  return (
    <>
      <MainApp className="App">
        <NavBar {...themeColors} />
        <Header {...themeColors} />
        <InfoSection {...themeColors} />
        <Technologies {...themeColors} />
        <ParralaxCards {...themeColors} />
        <Footer {...themeColors} />
      </MainApp>
    </>
  );
}

export default App;
