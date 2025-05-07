import moon from '../Cabeçalho/imagens-claro/moon-modo-claro.png';

function tec4(){	
    return(
        <>
            
            <div className='absolute top-[920px] left-[80px]  '>
                <div className='h-[160px] w-[180px] bg-LARANJA ' ></div>
            </div>

            <div className='absolute top-[930px] left-[90px]'>
                <div className='h-[140px] w-[160px] bg-ROSADO' ></div>
            </div>

            <div className='absolute top-[930px] left-[90px]'>
                <img className='h-[140px] w-[160px]' src={moon}></img>
            </div>

        </>
    );
}
export default tec4; 