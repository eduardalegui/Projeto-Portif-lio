import AGESPNB from '../E&E/imagens-E&E/AGESPNB.jpg'
function projeto2(){	
    return(
        <>
            
            <div className='absolute top-[1970px] left-[730px] '>
                <div className='h-[340px] w-[340px] bg-ROSADO ' ></div>
            </div>

            <div className='absolute top-[2000px] left-[810px]'>
                <div className='h-[50px] w-[180px] bg-LARANJA' ></div>
            </div>      

            <div className='absolute top-[2060px] left-[770px]'>
                <div className='h-[220px] w-[260px] bg-LARANJA ' ></div>
            </div>

            <div className='absolute top-[2065px] left-[775px]'>
                <img className='h-[210px] w-[250px]' src={AGESPNB}></img>
            </div>

            <div className='relative text-center top-[1805px] left-[780px] h-[200px] w-[240px]'>
                <p className="text-LETRA text-[25px] font-Inria_Sans_Bold">AGES</p>
            </div>            

           

        </>
    );
}
export default projeto2; 