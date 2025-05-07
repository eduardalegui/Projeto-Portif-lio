import moon from '../Cabeçalho/imagens-claro/moon-modo-claro.png';
function ee1(){	
    return(
        <>
            
            <div className='absolute top-[1490px] left-[170px] '>
                <div className='h-[400px] w-[320px] bg-ROSADO ' ></div>
            </div>

            <div className='absolute top-[1530px] left-[240px]'>
                <div className='h-[150px] w-[180px] bg-LARANJA' ></div>
            </div>      

            <div className='absolute top-[1535px] left-[255px]'>
                <img className='h-[140px] w-[170px]' src={moon}></img>
            </div>

        </>
    );
}
export default ee1; 