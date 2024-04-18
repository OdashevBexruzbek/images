import {useState} from 'react'
import earth from './assets/earth.jpg'
import earth2 from './assets/earth2.webp'
import chaqmoq from './assets/chaqmor.jpg'
import river from './assets/river.jpg'

function App() {
  const images = [earth, earth2, chaqmoq, river];

  const [image, setImage] = useState(0);
  const next = () => {
    setImage((back) => (back === images.length - 1 ? 0 : back + 1));
  };
  const back = () => {
    setImage((back) => (back === 0 ? images.length - 1 : back - 1));
  };

  return (
    <div className='container w-50 mx-auto mt-4 text-center border border-primary-subtle row justify-content-between'>
      <h1 className='text-warning'>World Image</h1>
      <img className='w-75 mx-auto' src={images[image]} alt='' width={300} height={300}></img>
      
      <button className='w-75 mx-auto mt-3  text-center btn btn-outline-primary' onClick={next}>Next</button>
      <button className='w-75 mx-auto mt-3 mb-3 text-center btn btn-outline-secondary' onClick={back}>Back</button>
    </div>
  );
}

export default App;
