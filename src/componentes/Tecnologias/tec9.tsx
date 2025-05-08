import prisma from './imagens-tec/prisma-svgrepo-com.png'

function tec9(){	
    return(
        <>
            
            <div className='absolute top-[1010px] left-[440px]  '>
                <div className='h-[140px] w-[160px] bg-LARANJA ' ></div>
            </div>

            <div className='absolute top-[1020px] left-[450px]'>
                <div className='h-[120px] w-[140px] bg-ROSADO' ></div>
            </div>

            <div className='absolute top-[1020px] left-[450px]'>
                <img className='h-[120px] w-[140px] p-1' src={prisma}></img>
            </div>

        </>
    );
}
export default tec9; 