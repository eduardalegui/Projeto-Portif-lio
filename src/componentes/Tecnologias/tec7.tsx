import react from './imagens-tec/react-svgrepo-com.png'

function tec7(){	
    return(
        <>
            
            <div className='absolute top-[1010px] left-[100px]  '>
                <div className='h-[140px] w-[160px] bg-LARANJA ' ></div>
            </div>

            <div className='absolute top-[1020px] left-[110px]'>
                <div className='h-[120px] w-[140px] bg-ROSADO' ></div>
            </div>

            <div className='absolute top-[1020px] left-[110px]'>
                <img className='h-[120px] w-[140px]' src={react}></img>
            </div>

        </>
    );
}
export default tec7; 