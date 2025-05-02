
import { useState } from 'react'
import Barra1 from './componentes/Barra1'
import Cabeçalho from './componentes/cabeçalho'
import './index.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <body className='bg-FUNDO'>
      
      <Cabeçalho/>
      <Barra1/>
      <p className='font-Inria_Sans text-LETRA'>OIE oie</p>
      <p className='font-Inria_Sans_Bold text-LETRA'>OIE oie</p>
    
    </body>
    </>
  )
}

export default App





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
