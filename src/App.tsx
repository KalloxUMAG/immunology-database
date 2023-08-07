import {Routes, Route} from 'react-router-dom';
import Layout from './components/shared/Layout';
import NotFound from './components/shared/NotFound';

const App: React.FC = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>

      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App;
