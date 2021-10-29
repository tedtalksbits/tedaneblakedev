import './App.css';
import NavBar from './components/NavBar/NavBar';
import { themeColors } from './data/appColors';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import InfoSection from './pages/InfoSection';
import Header from './components/Header/Header';
const MainApp = styled.main`
  

`
function App() {

  return (
    <>
      <MainApp className="App">
        <NavBar {...themeColors} />
        <Header {...themeColors} />
        <HomePage {...themeColors} />
        <InfoSection {...themeColors} />

        <Footer {...themeColors} />
      </MainApp>
    </>
  );
}

export default App;
