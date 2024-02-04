import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/navbar/navbar'
import ItemListContainer from './Components/itemlistcontainer/itemlistcontainer';

function App() {

  return (
    <>
      <NavBar />
      <main>
          <ItemListContainer titulo = "Elevá tu juego al maximo nivel!" />
      </main>
    </>
  )
}

export default App
