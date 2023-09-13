import './App.css'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'

function App() {

  return (
    <div className='relative'>
      <div className='bg-img -z-10 '/>
      <div className=''>
      <Header></Header>
      <div className='p-4'>
        <Cards></Cards>
      </div>
    </div>
    </div>
  )
}

export default App
