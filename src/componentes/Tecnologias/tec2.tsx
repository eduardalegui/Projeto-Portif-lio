import typescript from './imagens-tec/typescript-svgrepo-com.png'
function tec2(){	
    return(
        <>
            
            <div className='absolute top-[710px] left-[270px]  '>
                <div className='h-[140px] w-[160px] bg-LARANJA ' ></div>
            </div>

            <div className='absolute top-[720px] left-[280px]'>
                <div className='h-[120px] w-[140px] bg-ROSADO' ></div>
            </div>

            <div className='absolute top-[720px] left-[280px]'>
                <img className='h-[120px] w-[140px] p-1' src={typescript}></img>
            </div>

        </>
    );
}
export default tec2; 