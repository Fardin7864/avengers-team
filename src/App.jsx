import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'

function App() {

  const [listActor, setListActor]= useState([]);

  const hadleAddToList = actor => { 
    setListActor([...listActor,actor])
   }
   console.log(listActor)

   let totalSalary = 0;
   listActor.map(actor => 
      totalSalary =  totalSalary+ actor.salary
   )

  return (
    <div className='relative'>
      <div className='bg-img -z-10 '/>
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

export default App
