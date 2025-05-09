import mail from './imagens-claro/mail-modo-claro.png';

function botoesE() {
    return(
        <>
        <div className='flex flex-row'>

            <a href="mailto:eduardaleguisamo100506@gmail.com">
                <img className='h-[40px] w-[40px] mr-[20px]' src={mail}></img>
            </a>

        </div>
        </>
    );
}
export default botoesE; 