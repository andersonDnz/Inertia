import { SlideComponent } from "./components/SlideComponent";

import HomeCardes from "../app/components/homePage";

export default function Home() {
  return (
    <div className="block font-sans ">
      <div className=" mb-4">
        <SlideComponent />
      </div>
      <div className="p-4 mb-4">
        <HomeCardes />
      </div>
    </div>
  );
}
