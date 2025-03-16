import './App.css'
import Footer from './components/Footer/Footer'
// import Header from './components/Header/Header'
// import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom';
import WordList from './components/WordList/WordList';
import Flashcards from './components/Flashcards/Flashcards';
import Training from './components/Training/Training';
import NoMatch from './components/NoMatch/NoMatch';
// import WordsMobX from './components/MobXContent/WordsMobX';

function App() {

  return (
    <>
      <div className='layout'>
        <Sidebar />
        <div className='content'>
          {/* <Header /> */}
          {/* <Main /> */}
          <Routes>
            <Route path="/" element={<WordList />} />
            {/* <Route path="/words" element={<WordsMobX />} /> */}
            <Route path="/words" element={<WordList />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/training" element={<Training />} />
            {/* *-для всех вывдим ошибку, если не найдена */}
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
