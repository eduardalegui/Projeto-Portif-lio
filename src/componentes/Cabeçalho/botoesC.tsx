import linkedin from '../imagem/linkedin-modo-claro.png';
import mail from '../imagem/mail-modo-claro.png';
import moon from '../imagem/moon-modo-claro.png';

function botoesC() {
    return(
        <>
        <div className='flex flex-row h-10 w-10 mt-5 mb-5 ml-5 mr-5'>
            <img className='ml-0 mr-10' src={moon}></img>
            <img className='ml-10 mr-5' src={mail}></img>
            <img className='ml-5 mr-5' src={linkedin}></img>
        </div>
        </>
    );
}
export default botoesC;