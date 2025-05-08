import docker from './imagens-tec/docker-svgrepo-com.png'

function tec6(){	
    return(
        <>
            
            <div className='absolute top-[860px] left-[440px]  '>
                <div className='h-[140px] w-[160px] bg-LARANJA ' ></div>
            </div>

            <div className='absolute top-[870px] left-[450px]'>
                <div className='h-[120px] w-[140px] bg-ROSADO' ></div>
            </div>

            <div className='absolute top-[870px] left-[450px] '>
                <img className='h-[120px] w-[140px] p-1' src={docker}></img>
            </div>

        </>
    );
}
export default tec6; 