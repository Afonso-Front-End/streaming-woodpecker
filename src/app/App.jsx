import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import VideoPlay from '../components/VideoPlay/VideoPlay';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route index element={<Layout />} />
        <Route path='/video/:id/:name' element={<VideoPlay/>} />
      </Routes>
    </Router>
  )
}

export default App
