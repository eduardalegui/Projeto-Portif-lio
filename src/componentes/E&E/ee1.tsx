import AGESPNB from './imagens-E&E/AGESPNB.jpg'
function ee1(){	
    return(
        <>
            
            <div className='absolute top-[1470px] left-[170px] '>
                <div className='h-[440px] w-[320px] bg-ROSADO ' ></div>
            </div>

            <div className='absolute top-[1510px] left-[240px]'>
                <div className='h-[150px] w-[180px] bg-LARANJA' ></div>
            </div>      

            <div className='absolute top-[1670px] left-[210px]'>
                <div className='h-[200px] w-[240px] bg-LARANJA ' ></div>
            </div>

            <div className='absolute top-[1515px] left-[245px]'>
                <img className='h-[140px] w-[170px]' src={AGESPNB}></img>
            </div>

            <div className='relative text-center top-[1675px] left-[210px] h-[200px] w-[240px]'>
                <p className="text-LETRA text-[25px] font-Inria_Sans_Bold">AGES</p>
            </div>            

            <div className='absolute text-center top-[1695px] left-[210px] h-[200px] w-[240px]'>
                <p className="text-LETRA text-[25px] font-Inria_Sans_Bold">Grupo de Estudos</p>
            </div>            

            <div className='absolute text-row top-[1725px] left-[220px] h-[155px] w-[225px]'>
                <p className="text-LETRA text-[20px] font-Inria_Sans">Iniciativa da Preto no Branco com a Ages para garantir experiência prá- tica em desenvolvimento de software aos alunos.</p>
            </div>    

        </>
    );
}
export default ee1; 

//<div className='absolute top-[1515px] left-[255px]'>
//<img className='h-[145px] w-[175px]' src={moon}></img>
//</div>