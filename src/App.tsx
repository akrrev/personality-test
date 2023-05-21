import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header/Header.tsx';
import LandingPage from './pages/LandingPage/LandingPage.tsx';
import Quiz from './pages/Quiz/Quiz.tsx';
import { store } from './redux/store.ts';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/quiz' element={<Quiz />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  )
}

export default App
