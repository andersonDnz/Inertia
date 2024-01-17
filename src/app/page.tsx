import { Carousel } from "./components/carousel";

import Image from "next/image";


import Card from "../../public/Card.jpeg";
import Card2 from "../../public/Card2.jpg";
import Card3 from "../../public/Card3.jpeg";

const imageItems = [
  <Image src={Card} alt='card' />,
  <Image src={Card2} alt='card2' />,
  <Image src={Card3} alt='card3' />,
]

export default function Home() {
  return (
    <div className="">
      <h1>Inertia</h1>
      <div className="flex  h-full flex-col items-center   ">
        <Carousel items={imageItems} />
      </div >
    </div>
  )
}
