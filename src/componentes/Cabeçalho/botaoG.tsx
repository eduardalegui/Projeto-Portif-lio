import github from './imagens-claro/github-142-svgrepo-com.png';

function botoesG() {
    return(
        <>
        <div className='absolute'>
            
            <a className='relative'href="https://github.com/eduardalegui?tab=repositories" target='_blank'>
                <div>
                    <img className=' h-[40px] w-[40px] mr-[80px]' src={github}></img>
                </div>
            </a>

        </div>
        </>
    );
}
export default botoesG; 