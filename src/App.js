
import './App.css';
import Bannar from './components/Bannar';
import BookMark from './components/BookMark';
import CardList from './components/cardList';
import HeadingText from './components/headingText';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="container mx-auto">
      here
      <Navbar/>
      <Bannar/>
      <HeadingText/>
    <div className='border-4 border-red-500 flex gap-4'>
      <CardList className='border-2 border-green-600'/>
      <BookMark/>
    </div>
    </div>
  );
}

export default App;
