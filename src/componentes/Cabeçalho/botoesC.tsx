import linkedin from './imagens-claro/linkedin-modo-claro.png';
import mail from './imagens-claro/mail-modo-claro.png';
import github from './imagens-claro/github-142-svgrepo-com.png';

function botoesC() {
    return(
        <>
        <div className='flex flex-row'>
            <img className='h-[40px] w-[40px] mr-[80px]' src={github}></img>
            <img className='h-[40px] w-[40px] mr-[20px]' src={mail}></img>
            <img className='h-[40px] w-[40px] ml-[20px]' src={linkedin}></img>
        </div>
        </>
    );
}
export default botoesC; 