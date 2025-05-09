import github from './imagens-claro/github-142-svgrepo-com.png';

function botoesG() {
    return(
        <>
        <div className='flex flex-row'>
            
            <a className='absolute'href="https://github.com/eduardalegui?tab=repositories" target='_blank'>
                <img className='h-[40px] w-[40px] mr-[80px]' src={github}></img>
            </a>

        </div>
        </>
    );
}
export default botoesG; 