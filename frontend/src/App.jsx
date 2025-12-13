import {Routes,Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Foot from './components/Foot'
import BurgerMenu from './components/BurgerMenu'


export default function App(){
  return (<>
    <BurgerMenu/>
    <Routes>
      <Route path='/' element={<MainPage/>}/>


    </Routes>
    <Foot/>
  </>)
}