import moeda from './moeda.png'
function projeto2(){	
    return(
        <>
            <a className= 'absolute' href="https://moeda3-eduardaleguis-projects.vercel.app/" target='_blank'>  
                
                <div className='absolute top-[] left-[730px] '>
                    <div className='h-[340px] w-[340px] bg-ROSADO ' ></div>
                </div>

                <div className='absolute top-[30px] left-[810px]'>
                    <div className='h-[50px] w-[180px] bg-LARANJA' ></div>
                </div>      

                <div className='absolute top-[90px] left-[770px]'>
                    <div className='h-[220px] w-[260px] bg-LARANJA ' ></div>
                </div>

                <div className='relative text-center top-[35px] left-[780px] h-[50px] w-[240px]'>
                    <p className="text-LETRA text-[25px] font-Inria_Sans_Bold">CONVERSOR</p>
                </div>            

                <div className='relative top-[45px] left-[775px]'>
                    <img className='h-[210px] w-[250px]' src={moeda}></img>
                </div>
       
            </a>   
           

        </>
    );
}
export default projeto2; 