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
            description: "descrição1",
        };
   
        const images: Imageprops[ ] = [ 
            { src: javascript, alt: "Javascript imagem", title:"Javascript", description: "descrição1"},
            { src: typescript, alt: "Typescript imagem", title:"Typescript", description: "descrição2"},
            { src: java, alt: "Java imagem", title:"Java", description: "descrição3"},
            { src: git, alt: "Git imagem", title:"Git", description: "descrição4" },
            { src: node, alt: "Node imagem", title:"Node", description: "descrição5" }, 
            { src: docker, alt: "Docker imagem", title:"Docker", description: "descrição6" }, 
            { src: react, alt: "React imagem", title:"React", description: "descrição7" }, 
            { src: tailwind, alt: "Tailwind imagem", title:"Tailwind", description: "descrição8" },
            { src: prisma, alt: "Prisma imagem", title:"Prisma", description: "descrição9" }, 
        ]
   
    return(
        <>
   
            <div className='relative'> 
                <div className='absolute top-[719px] left-[110px] grid grid-cols-3 gap-[31px]'>
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
                    <div className='absolute h-[380px] w-[500px] top-[780px] left-[830px]'>
                        <img src={selectedImage.src} alt={selectedImage.alt} className='top-[780px] left-[830px] h-[140px] w-[160px]' /> 
                        <p className='text-LETRA text-[35px] font-Inria_Sans_Bold'>{selectedImage.title}</p> 
                        <p className='text-LETRA text-[25px] font-Inria_Sans'>{selectedImage.description}</p> 
                    </div> 
                )}
                {!selectedImage &&( 
                    <div className='absolute h-[380px] w-[500px] top-[780px] left-[830px]'> 
                    
                            <img src={defaultImage.src} alt={defaultImage.alt} className=' top-[780px] left-[830px] h-[140px] w-[160px]' /> 
                            <p className='text-LETRA text-[35px] font-Inria_Sans_Bold'>{defaultImage.title}</p>
                            <p className='text-LETRA text-[25px] font-Inria_Sans'>{defaultImage.description}</p>  

                    </div>
                )}
            </div>
         
        </>
    )
}
export default tecnoD; 