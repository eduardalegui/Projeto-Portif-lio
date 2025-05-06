import linkedin from './imagens-claro/linkedin-modo-claro.png';
import mail from './imagens-claro/mail-modo-claro.png';
import moon from './imagens-claro/moon-modo-claro.png';

function botoesC() {
    return(
        <>
        <div className='flex flex-row'>
            <img className='h-[40px] w-[40px] mr-[60px]' src={moon}></img>
            <img className='h-[40px] w-[40px] mr-[5px]' src={mail}></img>
            <img className='h-[40px] w-[40px] ml-[5px]' src={linkedin}></img>
        </div>
        </>
    );
}
export default botoesC;