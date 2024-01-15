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
    <div>
      <h1>
        Welcome to inertia!
      </h1>
      <Carousel items={[imageItems]} />
    </div >

  )
}
