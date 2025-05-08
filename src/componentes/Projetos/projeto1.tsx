import AGESPNB from '../E&E/imagens-E&E/AGESPNB.jpg'
function projeto1(){	
    return(
        <>
            
            <div className='absolute top-[1970px] left-[270px] '>
                <div className='h-[340px] w-[340px] bg-ROSADO ' ></div>
            </div>

            <div className='absolute top-[2000px] left-[350px]'>
                <div className='h-[50px] w-[180px] bg-LARANJA' ></div>
            </div>      

            <div className='absolute top-[2060px] left-[310px]'>
                <div className='h-[220px] w-[260px] bg-LARANJA ' ></div>
            </div>

            <div className='absolute top-[2065px] left-[315px]'>
                <img className='h-[210px] w-[250px]' src={AGESPNB}></img>
            </div>

            <div className='relative text-center top-[2005px] left-[320px] h-[200px] w-[240px]'>
                <p className="text-LETRA text-[25px] font-Inria_Sans_Bold">AGES</p>
            </div>            

           

        </>
    );
}
export default projeto1; 