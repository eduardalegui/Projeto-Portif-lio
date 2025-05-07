import moon from '../Cabeçalho/imagens-claro/moon-modo-claro.png';
function ee2(){	
    return(
        <>
            
            <div className='absolute top-[1490px] left-[510px] '>
                <div className='h-[400px] w-[330px] bg-ROSADO ' ></div>
            </div>

            <div className='absolute top-[1530px] left-[585px]'>
                <div className='h-[150px] w-[180px] bg-LARANJA' ></div>
            </div>      

            <div className='absolute top-[1535px] left-[595px]'>
                <img className='h-[140px] w-[170px]' src={moon}></img>
            </div>

        </>
    );
}
export default ee2; 