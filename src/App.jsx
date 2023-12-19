import { Route, Router, Routes } from 'react-router-dom'
import './App.css'

import { Layout } from './layout'
import { Posts } from './pages/Posts'
import { CreatePosts } from './pages/CreatePost'
import { SinglPost } from './pages/SinglPost'
import { Delet } from './components/Delete'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='posts' element={<Posts />} />
          <Route path='posts/:postId/*' element={<SinglPost />}>
            <Route path='delete' element={<Delet />} />
          </Route>
          <Route path='create-post' element={<CreatePosts />} />
          <Route path='*'/>
        </Route>
      </Routes>
    </>
  )
}

export default App
