import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import About from './components/About/About';


function App() {
  const isAboutPage = window.location.pathname.replace(/\/$/, '') === '/sobre-mim';

  return (
    <div>
      <Sidebar />
      <Header />
      {isAboutPage ? <About /> : <Main />}
      <Footer />
    </div>
  );
}

export default App;
