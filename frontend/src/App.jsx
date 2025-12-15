import {Routes,Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Foot from './components/Foot'
import BurgerMenu from './components/BurgerMenu'
import BlogPosts from './pages/BlogPosts'
import Projects from './pages/Projects'
import First from './components/Blogs/First'
import "./App.css"


export default function App(){
  return (<>
  <main className='app-content'>
    <BurgerMenu/>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/BlogPosts' element={<BlogPosts/>}/>
      <Route path='/First' element></Route>


      <Route path='/Projects' element={<Projects/>}/>
    </Routes>
  </main>
    
    <footer>
      <Foot/>
    </footer>
    
  </>)
}