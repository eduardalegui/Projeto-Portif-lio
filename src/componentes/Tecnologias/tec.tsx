import javascript from './imagens-tec/javascript-155-svgrepo-com.png'
function tec1(){	
    return(
        <>
            
            <div className='absolute top-[710px] left-[100px] '>
                <div className='h-[140px] w-[160px] bg-LARANJA ' ></div>
            </div>

            <div className='absolute top-[720px] left-[110px]'>
                <div className='h-[120px] w-[140px] bg-ROSADO' ></div>
            </div>

            <div className='absolute top-[720px] left-[110px]'>
                <img className='h-[120px] w-[140px] p-1' src={javascript}></img>
            </div>

        </>
    );
}
export default tec1;    