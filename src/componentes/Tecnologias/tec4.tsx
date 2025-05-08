import git from './imagens-tec/git-svgrepo-com.png'

function tec4(){	
    return(
        <>
            
            <div className='absolute top-[860px] left-[100px]  '>
                <div className='h-[140px] w-[160px] bg-LARANJA ' ></div>
            </div>

            <div className='absolute top-[870px] left-[110px]'>
                <div className='h-[120px] w-[140px] bg-ROSADO' ></div>
            </div>

            <div className='absolute top-[870px] left-[110px]'>
                <img className='h-[120px] w-[140px] p-1' src={git}></img>
            </div>

        </>
    );
}
export default tec4; 