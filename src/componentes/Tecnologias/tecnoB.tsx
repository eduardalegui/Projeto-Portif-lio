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
    description: string
}

function Tecnologies(){
        const [selectedImage, setSelectedImage] = useState<Imageprops | null>(null)

        const defaultImage: Imageprops = {
            src: javascript,
            alt: "Imagem Padrão",
            description: "Descriçcão padrão.", 
        };
   
        const images: Imageprops[ ] = [ 
            { src: javascript, alt: "Javascript imagem", description: "descrição"},
            { src: typescript, alt: "Typescript imagem", description: "descrição"},
            { src: java, alt: "Java imagem", description: "descrição"},
            { src: git, alt: "Git imagem", description: "descrição" },
            { src: node, alt: "Node imagem", description: "descrição" }, 
            { src: docker, alt: "Docker imagem", description: "descrição" }, 
            { src: react, alt: "React imagem", description: "descrição" }, 
            { src: tailwind, alt: "Tailwind imagem", description: "descrição" },
            { src: prisma, alt: "Prisma imagem", description: "descrição" }, 
        ]
   
    return(
        <>
            <div className='flex flex-col ml-24 max-w-screen overflow-hidden '> 
   
                <div className='flex flex-row mt-15 ml-20 w-full max-w-[1000px] flex-shrink-0'> 
                    <div className="grid grid-cols-3 gap-11">
                        {images.map((image, index) =>( 
                        <img
                        key={index}
                        src={image.src} 
                        alt={image.alt} 
                        className="w-27 h-27 cursor-pointer transition-transform transform hover:scale-105 bg-transparent backd"
                        onClick={() => setSelectedImage(image)}/>
                        ))}
                    </div>
                    {selectedImage && (
                        <div className=" ml-20 p-4 rounded-lg itens-center justify-center flex flex-row w-[550px]">
                            <img src={selectedImage.src} alt={selectedImage.alt} className="w-65 h-65 mb-4" /> 
                            <p className="text-2xl text-white text-wrap ml-4 ">{selectedImage.description}</p> 
                        </div> 
                    )}
                    {!selectedImage &&( 
                        <div className=" m1-20 p-4 rounded-lg itens-center justify-center flex flex-row w-[550px]"> 
                            <img src={defaultImage.src} alt={defaultImage.alt} className="-65 h-65 mb-4" /> 
                            <p className="text-2xl \text-white text-wrap ml-4">{defaultImage.description}</p> 
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Tecnologies; 