import NavBar from './components/NavBar/NavBar';
import './App.css';
import { ToastContainer } from 'react-toastify';
import AlbumLists from './components/AlbumLists/AlbumLists';
function App() {
  return (
   <>
        <NavBar/>
      <AlbumLists/>
      <ToastContainer />
   </>
  );
}

export default App;
