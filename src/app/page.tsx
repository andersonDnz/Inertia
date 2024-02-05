import { SlideComponent } from "./components/SlideComponent";

import HomeCardes from "../app/components/homePage";
import TopSeriesCards from "./pages/series/tvShowCard/tvshow";
import { CardLol } from "./pages/games/cardLol";

export default function Home() {
  return (
    <div className="block font-sans ">
      <div className=" mb-4">
        <SlideComponent />
      </div>
      <div className="p-4 mb-4">
        <HomeCardes />
      </div >
      <hr className="my-4 border-t-2 border-gray-300" />
      <h1 className='text-2xl font-bold mb-2'>Confira também</h1>
      <div className="flex p-4 mb-4 justify-between">
        <TopSeriesCards />
        <CardLol />
      </div>
    </div>
  );
}
