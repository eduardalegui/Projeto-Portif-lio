import {useState} from 'react';

import javascript from './imagens-tec/javascript-155-svgrepo-com.png'
import typescript from './imagens-tec/typescript-svgrepo-com.png'
import java from './imagens-tec/java-svgrepo-com.png'
import git from './imagens-tec/git-svgrepo-com.png'
import node from './imagens-tec/node-svgrepo-com.png'
import docker from './imagens-tec/docker-svgrepo-com.png'
import react from './imagens-tec/react-svgrepo-com.png'
import tailwind from './imagens-tec/tailwind-css-svgrepo-com.png'
import prisma from './imagens-tec/prisma-svgrepo-com.png'


interface Imageprops {
    src: string
    alt: string
    title: string
    description: string
}

function tecnoD(){
        const [selectedImage, setSelectedImage] = useState<Imageprops | null>(null)

        const defaultImage: Imageprops = {
            src: javascript,
            alt: "Imagem",
            title: "Javascript",
            description: "JavaScript é uma linguagem usada para criar pá-ginas web interativas com animações, validações e conteúdo dinâmico no navegador.",
        };
   
        const images: Imageprops[ ] = [     
            { src: javascript, alt: "Javascript imagem", title:"Javascript", description: "JavaScript é uma linguagem usada para criar pá-ginas web interativas com animações, validações e conteúdo dinâmico no navegador."},
            { src: typescript, alt: "Typescript imagem", title:"Typescript", description: "TypeScript é uma linguagem que adiciona tipos ao JavaScript, tornando o código mais seguro e organizado."},
            { src: java, alt: "Java imagem", title:"Java", description: "Java é uma linguagem orientada a objetos, usada para criar aplicações portáteis e escaláveis."},
            { src: git, alt: "Git imagem", title:"Git", description: "Git é um sistema de controle de versão que per- mite gerenciar mudanças no código, facilitando o trabalho em equipe e o histórico de alterações." },
            { src: node, alt: "Node.js imagem", title:"Node.js", description: "Node.js é uma plataforma que permite rodar JavaScript fora do navegador, usada para criar servidores e aplicações web rápidas e escaláveis." }, 
            { src: docker, alt: "Docker imagem", title:"Docker", description: "Docker é uma plataforma que empacota apps em contêineres para rodar igual em qualquer ambiente." }, 
            { src: react, alt: "React imagem", title:"React", description: "React é uma biblioteca JavaScript usada para cri- ar interfaces de usuário de forma rápida e efici- ente, com foco em componentes reutilizáveis." }, 
            { src: tailwind, alt: "Tailwind imagem", title:"Tailwind", description: "Tailwind é um framework CSS que usa classes prontas para criar interfaces modernas direto no HTML." },
            { src: prisma, alt: "Prisma imagem", title:"Prisma", description: "Prisma é um ORM para Node.js que facilita o acesso ao banco de dados com consultas seguras, automáticas e tipadas." }, 
        ]
   
    return(
        <>
   
            <div className='absolute'> 
                <div className='relative top-[719px] left-[110px] grid grid-cols-3 gap-[31px]'>
                    {images.map((image, index) =>( 
                    <img
                    key={index}
                    src={image.src} 
                    alt={image.alt} 
                    className=' top-[720px] left-[110px] h-[120px] w-[140px] p-1'
                    onClick={() => setSelectedImage(image)}/>
                    ))}
                </div>
                
                {selectedImage && (
                    <div className='relative h-[0px] w-[462px] top-[358px]'>
                        <img src={selectedImage.src} alt={selectedImage.alt} className='relative top-[0px] left-[830px] h-[140px] w-[160px]' /> 
                        <p className='relative left-[830px] text-LETRA text-[35px] font-Inria_Sans_Bold mt-[8px] justify-center'>{selectedImage.title}</p> 
                        <p className='relative left-[678px] text-LETRA text-[22px] font-Inria_Sans mt-[10px]'>{selectedImage.description}</p> 
                    </div> 
                )}
                {!selectedImage &&( 
                    <div className='relative h-[0px] w-[462px] top-[358px]'> 
                    
                            <img src={defaultImage.src} alt={defaultImage.alt} className='relative top-[0px] left-[830px] h-[140px] w-[160px]' /> 
                            <p className='relative left-[830px] text-LETRA text-[35px] font-Inria_Sans_Bold mt-[8px] justify-center'>{defaultImage.title}</p>
                            <p className=' relative left-[678px] text-LETRA text-[22px] font-Inria_Sans mt-[10px]'>{defaultImage.description}</p>  

                    </div>
                )}
            </div>
         
        </>
    )
}
export default tecnoD; 