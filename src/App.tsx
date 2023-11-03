import { useCallback, useRef } from "react";
import IconMenuClose from "./assets/images/icon-menu-close.svg";
import IconMenu from "./assets/images/icon-menu.svg";
import ImageGamingGrowth from "./assets/images/image-gaming-growth.jpg";
import ImageRetroPcs from "./assets/images/image-retro-pcs.jpg";
import ImageTopLaptops from "./assets/images/image-top-laptops.jpg";
import ImageWeb3Mobile from "./assets/images/image-web-3-mobile.jpg";
import Logo from "./assets/images/logo.svg";
import ListCard from "./components/ListCard";
import ListItem from "./components/ListItem";

function App() {
  const sidebarRef = useRef<HTMLElement>(null);

  const toggleSidebar = useCallback((state: "open" | "close") => {
    sidebarRef.current?.setAttribute("data-hide", String(state === "close"));
  }, []);

  return (
    <div className="font-[Inter] text-[15px] bg-offWhite text-veryDarkBlue w-full px-5 flex flex-col gap-4">
      <header className="flex justify-between items-center py-5 sticky top-0 bg-offWhite">
        <img src={Logo} alt="logo" className="h-8" />
        <img
          src={IconMenu}
          alt="menu icon"
          onClick={() => toggleSidebar("open")}
        />
      </header>

      <aside
        ref={sidebarRef}
        data-hide="true"
        onClick={(e) => e.target === e.currentTarget && toggleSidebar("close")}
        className="group h-screen w-screen fixed top-0 left-0 bg-black/20 data-[hide=true]:bg-black/0 data-[hide=true]:invisible transition-all duration-500 ease-out"
      >
        <nav className="w-2/3 h-screen group-data-[hide=true]:translate-x-full bg-white fixed top-0 right-0 flex flex-col items-end p-6 gap-20 transition-all duration-300 ease-out">
          <img
            src={IconMenuClose}
            alt="menu close icon"
            className="h-8 w-fit"
            onClick={() => toggleSidebar("close")}
          />
          <ul className="flex flex-col gap-6 text-xl w-full">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="grid grid-cols-1 gap-16 pb-20">
        <div className="grid grid-cols-1 gap-6">
          <img src={ImageWeb3Mobile} alt="image web 3" className="w-full" />

          <h1 className="text-5xl font-extrabold">
            The Bright Future of Web 3.0?
          </h1>

          <div className="flex flex-col gap-6">
            <p className="text-darkGrayishBlue">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>

            <a
              href="#"
              className="px-9 py-3 cursor-pointer bg-softRed w-fit font-semibold text-offWhite tracking-[0.2em]"
            >
              READ MORE
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 px-5 py-6 bg-veryDarkBlue text-grayishBlue">
          <span className="text-3xl text-softOrange font-bold">New</span>

          <ul className="flex flex-col justify-between gap-8">
            <ListItem
              title="Hydrogen VS Electric Cars"
              resume="Will hydrogen-fueled cars ever catch up to EVs?"
            />
            <div className="w-full h-[1px] bg-darkGrayishBlue" />
            <ListItem
              title="The Downsides of AI Artistry"
              resume="What are the possible adverse effects of on-demand AI image generation?"
            />
            <div className="w-full h-[1px] bg-darkGrayishBlue" />
            <ListItem
              title="Is VC Funding Drying Up?"
              resume="Private funding by VC firms is down 50% YOY. We take a look at what that means."
            />
          </ul>
        </div>

        <ul className="flex flex-col gap-8">
          <ListCard
            imageSource={ImageRetroPcs}
            imageAlt="retro pcs image"
            index="01"
            title="Reviving Retro PCs"
            resume="What happens when old PCs are given modern upgrades?"
          />
          <ListCard
            imageSource={ImageTopLaptops}
            imageAlt="top laptops image"
            index="02"
            title="Top 10 Laptops of 2022"
            resume="Our best picks for various needs and budgets."
          />
          <ListCard
            imageSource={ImageGamingGrowth}
            imageAlt="gaming growth image"
            index="03"
            title="The Growth of Gaming"
            resume="How the pandemic has sparked fresh opportunities."
          />
        </ul>
      </main>
    </div>
  );
}

export default App;
