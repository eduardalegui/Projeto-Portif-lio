import node from './imagens-tec/node-svgrepo-com.png'

function tec5(){	
    return(
        <>
            
            <div className='absolute top-[860px] left-[270px]  '>
                <div className='h-[140px] w-[160px] bg-LARANJA ' ></div>
            </div>

            <div className='absolute top-[870px] left-[280px]'>
                <div className='h-[120px] w-[140px] bg-ROSADO' ></div>
            </div>

            <div className='absolute top-[870px] left-[282px]'>
                <img className='h-[120px] w-[140px] p-1' src={node}></img>
            </div>

        </>
    );
}
export default tec5; 