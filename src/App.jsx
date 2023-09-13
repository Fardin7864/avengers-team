import { useState,useEffect } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'

function App() {

  const [listActor, setListActor]= useState([]);
  const [isVisible, setIsVisible]= useState(false);
  
  let totalSalary = 0;
  listActor.map(actor => 
     totalSalary =  totalSalary+ actor.salary
  )

  const hadleAddToList = actor => { 
    if ((totalSalary + actor.salary) < 20000) {
      setListActor([...listActor,actor])      
    }
    else{
        setIsVisible(true)
             // Automatically hide the alert after 3 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
   }


  return (
    <div className='relative'>
      <div className='bg-img -z-10 '/>
      <AutoDismissalAlert isVisible={isVisible}></AutoDismissalAlert>
      <div className=''>
      <Header></Header>

      <div className='flex gap-4'>
      <div className='p-4 w-2/3'>
        <Cards
        hadleAddToList={hadleAddToList}
        ></Cards>
      </div>
       <Cart
       listActor={listActor}
       totalSalary={totalSalary}
       ></Cart>
      </div>
    </div>
    </div>
  )
}



const AutoDismissalAlert = ({isVisible,setIsVisible}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className={`fixed top-0 right-0 m-4 p-4 bg-blue-500 text-white rounded-lg shadow-lg fade-out-animation`}>
          <p>You are out of budget!</p>
        </div>
      )}
    </>
  );
};

export default App
