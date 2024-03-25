import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'

const ImageCard = ({image,title}:{image:string,title:string}) => {
  return (
    <Card>
            <CardContent>
                <figure className='m-0 p-0 h-[18.75rem] w-[18.75rem] relative'>
                    <Image src={image} alt={title} width={200} height={200} unoptimized className='w-full h-full object-cover'/>
                    <span className="text-xl">{title}</span>
                </figure>
            </CardContent>
        </Card>
  )
}

export default ImageCard
