import linkedin from './imagens-claro/linkedin-modo-claro.png';
import mail from './imagens-claro/mail-modo-claro.png';
import github from './imagens-claro/github-142-svgrepo-com.png';

function botoesC() {
    return(
        <>
        <div className='mt-[40px] ml-[40px] flex flex-row'>

            <a className= '' href="https://github.com/eduardalegui" target='_blank'>
                <img className='h-[40px] w-[40px] mr-[40px]' src={github}></img>
            </a>
            <a href="mailto:eduardaleguisamo100506@gmail" target='_blank'>
                <img className='h-[40px] w-[50px] mr-[20px]' src={mail}></img>
            </a>

            <a href="https://www.linkedin.com/in/eduarda-leguisamo-4370aa356/" target='_blank'>
                <img className='h-[40px] w-[40px] ml-[20px]' src={linkedin}></img>
            </a>

        </div>
        </>
    );
}
export default botoesC; 