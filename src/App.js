
import { useState } from 'react';
import './App.css';
import Bannar from './components/Bannar';
import BookMark from './components/BookMark';
import CardList from './components/cardList';
import HeadingText from './components/headingText';
import Navbar from './components/Navbar';

function App() {
  const [resipis,setResipis]=useState([]);
  const heandleClick=(resipi) => {
    const bookmarks=[...resipis,resipi];
    setResipis(bookmarks);
    // console.log(bookmarks);
 }
  return (
    <div className="container mx-auto">
      here
      <Navbar/>
      <Bannar/>
      <HeadingText/>
    <div className='border-4 border-red-500 flex gap-4'>
      <CardList heandleClick={heandleClick}  className='border-2 border-green-600'/>
      <BookMark resipis={resipis}/>
    </div>
    </div>
  );
}

export default App;
