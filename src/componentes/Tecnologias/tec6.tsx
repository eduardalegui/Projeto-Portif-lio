import moon from '../Cabeçalho/imagens-claro/moon-modo-claro.png';

function tec6(){	
    return(
        <>
            
            <div className='absolute top-[920px] left-[480px]  '>
                <div className='h-[160px] w-[180px] bg-LARANJA ' ></div>
            </div>

            <div className='absolute top-[930px] left-[490px]'>
                <div className='h-[140px] w-[160px] bg-ROSADO' ></div>
            </div>

            <div className='absolute top-[930px] left-[490px]'>
                <img className='h-[140px] w-[160px]' src={moon}></img>
            </div>

        </>
    );
}
export default tec6; 