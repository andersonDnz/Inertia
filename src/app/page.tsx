import { Carousel } from "./components/carousel";
import Image from "next/image";


import Card from "../../public/Card.jpeg";
import Card2 from "../../public/Card2.jpg";
import Card3 from "../../public/Card3.jpeg"

const imageItems = [
  <Image className='h-full w-full' src={Card} alt='card' />,
  <Image className='h-full w-full' src={Card2} alt='card2' />,
  <Image className='h-full w-full' src={Card3} alt='card3' />,
]

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center px-20 ">
      <Carousel items={imageItems} />
    </div >

  )
}
