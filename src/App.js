import './App.css';
import Container from './components/container';
import Menu from './components/Menu';
import Aside from './components/Aside';

const menu ={
  backgroundColor: '#546895'
}
const menuItem = {
  backgroundColor: '#365847',
  color: 'white',
  fontSize: '2rem'
}
const aside = {
  backgroundColor: '#a53685',
  color: 'green',
  fontSize: '2rem'
}
function App() {
  return (
    <div className="App">
      <Container>
        <h2>This is the container child</h2>
        <Menu menuStyle={menu} menuItem={ menuItem}/>
        <Aside/>
      </Container>
    </div>
  );
}

export default App;
