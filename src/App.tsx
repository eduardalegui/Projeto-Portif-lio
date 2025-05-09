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
import BarraLI from './componentes/Tecnologias/barraLI'
import BarraR from './componentes/Tecnologias/barraR'
import TecnoD from './componentes/Tecnologias/tecnoD'
import BarraDT from './componentes/Tecnologias/barraDT'

import BarraTI from './componentes/E&E/barraTI'
import BarraLII from './componentes/E&E/barraLII'
import BarraRIII from './componentes/E&E/barraRIII'
import Ee1 from './componentes/E&E/ee1'
import Ee2 from './componentes/E&E/ee2'
import Ee3 from './componentes/E&E/ee3'
import BarraLIII from './componentes/E&E/barraLIII'
import BarraRIV from './componentes/E&E/barraRIV'

import BarraTII from './componentes/Projetos/barraTII'
import Projeto1 from './componentes/Projetos/projeto1'
import Projeto2 from './componentes/Projetos/projeto2'
import BarraLIV from './componentes/Projetos/barraLIV'
import BarraRV from './componentes/Projetos/barraRV'

function App() {
  
  return (
    <>
      <div className=''>
        <div id='Cabeçalho' >

          <div className=''>
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


        <div id='Tecnologias' >
          <div>
            <BarraT/>
          </div>

          <div className='relative'>
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

          <div>
            <BarraDT/>
          </div>

          <div className= 'relative'>
            <TecnoD/>
          </div>

          <div className='absolute top-[1190px] right-[0px]'>
            <BarraR/>
          </div>

          <div className='absolute top-[1000px] right-[30px]'>
            <BarraLI/>
          </div>

        </div>

        <div id='E&E'  >
          <div>
            <BarraTI/>
          </div>

          <div className='absolute top-[1400px] left-[0px]'>
            <BarraRIII/>
          </div>  

          <div className='absolute top-[1300px] left-[30px]'>
            <BarraLII/>
          </div>

          <div className='relative flex flex-row'>
            <Ee1/>
            <Ee2/>
            <Ee3/>
          </div>

          <div className='absolute top-[1700px] right-[30px]'>
            <BarraLIII/>
          </div>

          <div className='absolute top-[2000px] right-[0px]'>
            <BarraRIV/>
          </div>
        </div>

        <div id='Projetos' >
          <div className='text-center'>
            <BarraTII/>
          </div>

          <div className='absolute top-[2250px]'>
            <Projeto1/>
          </div>

          <div className='absolute top-[2250px]'>
            <Projeto2/>
          </div>

          <div className='absolute top-[2470px] left-[30px]'>
            <BarraLIV/>
          </div>

          <div className='absolute top-[2680px] left-[0px]'>
            <BarraRV/>
          </div>

        </div>

      </div>


    </>
  )
}

export default App
