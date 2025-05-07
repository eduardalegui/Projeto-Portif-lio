import './index.css'

import BarraL from './componentes/Cabeçalho/barraL'
import BarraRI from './componentes/Cabeçalho/barraRI'
import BarraRII from './componentes/Cabeçalho/barraRII'
import BotoesC from './componentes/Cabeçalho/botoesC'

import BarraT from './componentes/Tecnologias/barraT'
import Tec1 from './componentes/Tecnologias/tec'
import Tec2 from './componentes/Tecnologias/tec2'
import Tec3 from './componentes/Tecnologias/tec3'
import Tec4 from './componentes/Tecnologias/tec4'
import Tec5 from './componentes/Tecnologias/tec5'
import Tec6 from './componentes/Tecnologias/tec6'
import Tec7 from './componentes/Tecnologias/tec7'
import Tec8 from './componentes/Tecnologias/tec8'
import Tec9 from './componentes/Tecnologias/tec9'

function App() {
  
  return (
    <>
      <div className='flex flex-col'>
        <div id='Cabeçalho' className='relative'>
          <div className='absolute top-[40px] left-[40px] '>
           <BotoesC/>
          </div> 

          <div className='absolute top-[0px] right-[30px] '>
            <BarraRI/>
          </div>

          <div className='absolute top-[120px] left-[0px]'>
           <BarraL/>
          </div>  

          <div className='absolute text-center top-[200px] left-[0px] right-[0px] text-LETRA'>
            <div className='text-[55px] font-Inria_Sans '>
              <p>EDUARDA PFITSCHER</p> 
            </div>

            <div className='text-[35px] font-Inria_Sans_Bold mt-[10px] '> 
              <p>Front-end Dev</p> 
            </div>
          
            <div className='text-[30px] font-Inria_Sans  '> 
              <p>"Construo soluções em código com a mesma clareza com </p> 
            </div>
          </div>

          <div className='absolute text-center top-[380px] left-[0px] right-[0px] text-LETRA'>
            <div className='text-[30px] font-Inria_Sans'> 
              <p>que compartilho ideias."</p> 
            </div>
          </div>

          <div className='absolute top-[465px] right-[0px]'>
            <BarraL/>
          </div>

          <div className='absolute top-[385px] left-[30px] '>
            <BarraRII/>
          </div>
        </div> 


        <div id='Tecnologias' className='relative'>
          <div>
            <BarraT/>
          </div>

          <div>
            <Tec1/>
            <Tec2/>
            <Tec3/>
            <Tec4/>
            <Tec5/>
            <Tec6/>
            <Tec7/>
            <Tec8/>
            <Tec9/>
          </div>


        

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
