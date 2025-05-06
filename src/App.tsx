import BarraL from './componentes/Cabeçalho/barraL'
import BotoesC from './componentes/Cabeçalho/botoesC'
import './index.css'

function App() {
  
  return (
    <>
      <div id='Cabeçalho' className='relative'>

        <div className='absolute top-[20px] left-[40px] '>
          <BotoesC/>
        </div> 

        <div className='absolute top-[80px] left-[0px]'>
          <BarraL/>
        </div>  

        <div className='absolute text-center top-[160px] left-[0px] right-[0px] text-LETRA'>

          <div className='text-5xl font-Inria_Sans '>
            <p>EDUARDA PFITSCHER</p> 
          </div>

          <div className='text-4xl font-Inria_Sans_Bold mt-[35px] '> 
            <p>Front-end Dev</p> 
          </div>

          <div className='text-3xl font-Inria_Sans mt-[1px] '> 
            <p>"Construo soluções em código com a mesma clareza com que compartilho ideias."</p> 
          </div>

        </div>  

        <div className='absolute top-[360px] right-[0px]'>
          <BarraL/>
        </div>

      </div>
    </>
  )
}

export default App

//<div className='absolute top-0 left-0 right-0 bottom-0'>



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
