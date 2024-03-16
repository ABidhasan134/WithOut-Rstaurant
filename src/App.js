import { useState } from 'react';
import './App.css';
import Bannar from './components/Bannar';
import BookMark from './components/BookMark';
import CardList from './components/cardList';
import HeadingText from './components/headingText';
import Navbar from './components/Navbar';

function App() {
  const [resipis, setResipis] = useState([]);
  const [preperd, setPreperd] = useState([]);

  const heandleClick = (resipi, id) => {
    const found = resipis.some(recipe => recipe.recipe_id === id);
    if (found) {
      alert("This recipe is already added.");
    } else {
      const bookmarks = [...resipis, resipi];
      setResipis(bookmarks);
    }
  };

  const handelremove = (removedItem, id) => {
    // Filter out the removed item from resipis
    const remainingItems = resipis.filter(bookmark => bookmark.recipe_id !== id);
    
    // Add the removed item to preperd
    setPreperd(prevPreperd => [...prevPreperd, removedItem]);
  
    // Update the state with the remaining items
    setResipis(remainingItems);
  };
  

  return (
    <div className="container mx-auto">
      <Navbar />
      <Bannar />
      <HeadingText />
      <div className='sm:flex  w-full  sm:gap-4 sm:mt-10'>
        <CardList heandleClick={heandleClick} className='border-2 border-green-600' />
        {/* Pass preperd as preperdItems */}
        <BookMark resipis={resipis} handelremove={handelremove} preperdItems={preperd} />
      </div>
    </div>
  );
}

export default App;
