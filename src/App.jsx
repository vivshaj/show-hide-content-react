import './App.css';
import  Header from './Header'
import ShowHide from './Show-Hide';
import Footer from './Footer';

function App() {
  return (
    <div className="App d-flex flex-column" style={{height:'100vh'}}>
      <Header/>
      <ShowHide/>
      <Footer/>     
    </div>
  );
}

export default App;
