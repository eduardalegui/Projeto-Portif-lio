import java from './imagens-tec/java-svgrepo-com.png'
function tec3(){	
    return(
        <>
            
            <div className='absolute top-[710px] left-[440px]  '>
                <div className='h-[140px] w-[160px] bg-LARANJA ' ></div>
            </div>

            <div className='absolute top-[720px] left-[450px]'>
                <div className='h-[120px] w-[140px] bg-ROSADO' ></div>
            </div>

            <div className='absolute top-[720px] left-[450px]'>
                <img className='h-[120px] w-[140px] p-2' src={java}></img>
            </div>

        </>
    );
}
export default tec3; 