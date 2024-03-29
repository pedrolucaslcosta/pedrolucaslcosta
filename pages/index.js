import Head from "next/head";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Button } from "@/components/ui/button"
import { RiTwitterXLine } from "react-icons/ri";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGithubSquare,
  FaHtml5,
  FaLaravel,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import profilePic from "../public/pedrolucas-profile-pic.jpg";
import model3d from "../public/3d.png";
// import videoCover from "../public/videoCover.mp4";
import thumbNoisePlayer from "../public/NoisePlayer.png";
import thumbTodoListApp from "../public/TodoListApp.png";
import design from "../public/design-test.png";
import { useState } from "react";
import {
  ChevronDownCircle,
  ChevronUp,
  Hand,
  HandIcon,
  Linkedin,
  MousePointer2,
} from "lucide-react";
import NavItem from "./components/NavItem";
import PortfolioItem from "./components/PortfolioItem";
import UI_Badge from "./components/UI_Badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
	<div className={darkMode ? "dark" : ""}>
	  <Head>
		<title>Pedro Lucas Portfolio</title>
		<meta name="description" content="Generated by create next app" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="/favicon.ico" />
	  </Head>

	  <main className="z-10">
		<a
		  href="#"
		  className="rounded-full bg-neutral-50 fixed bottom-4 right-4 p-3"
		>
		  <ChevronUp />
		</a>

		<header class="fixed flex font-space_grotesk flex-wrap sm:justify-start sm:flex-nowrap z-50 w-screen text-sm py-6">
		  <nav
			class="w-full backdrop-blur-lg
  px-4 sm:px-4 md:px-16 lg:px-24 xl:px-40 2xl:px-40
  sm:flex sm:items-center sm:justify-between"
			aria-label="Global"
		  >
			<div class="flex items-center justify-between">
			  <a
				class="flex-none text-2xl dark:text-neutral-50 uppercase font-bold tracking-[.3rem]"
				href="#"
			  >
				Pedro Lucas
			  </a>
			  <div class="sm:hidden">
				<button
				  type="button"
				  class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
				  data-hs-collapse="#navbar-with-collapse"
				  aria-controls="navbar-with-collapse"
				  aria-label="Toggle navigation"
				>
				  <svg
					class="hs-collapse-open:hidden w-4 h-4"
					width="16"
					height="16"
					fill="currentColor"
					viewBox="0 0 16 16"
				  >
					<path
					  fill-rule="evenodd"
					  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
					/>
				  </svg>
				  <svg
					class="hs-collapse-open:block hidden w-4 h-4"
					width="16"
					height="16"
					fill="currentColor"
					viewBox="0 0 16 16"
				  >
					<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
				  </svg>
				</button>
			  </div>
			</div>
			<div
			  id="navbar-with-collapse"
			  class="hidden basis-full grow sm:block"
			>
			  <div
				class="
	  items-center gap-5 hidden md:flex
	  flex-col mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5"
			  >
				<NavItem text={"Home"} href={"#"} type={"link"} />
				<NavItem text={"About me"} href={"#about-me"} type={"link"} />
				<NavItem text={"Portfolio"} href={"#portfolio"} type={"link"} />
				<Button variant="outline">Button</Button>

				<NavItem
				  text={"GitHub"}
				  href={"https://github.com/pedrolucaslcosta"}
				  type={"button"}
				  target={"_blank"}
				/>
			  </div>
			</div>
		  </nav>
		</header>

		<nav
		  className="backdrop-blur-lg bg-neutral-900/80 font-space_grotesk flex justify-between py-6 fixed w-screen z-50
	  px-4 sm:px-4 md:px-16 lg:px-24 xl:px-40 2xl:px-40
	  "
		>
		<h1 className="text-2xl dark:text-neutral-50 uppercase font-bold tracking-[.3rem]">
			Pedro Lucas
		</h1>
		<NavigationMenu className="items-center gap-4 hidden md:flex">
			<NavigationMenuList>

				<NavigationMenuItem>
			  		<Button asChild variant="link">
						<Link href="#">Home</Link>
					</Button>
			  	</NavigationMenuItem>

				<NavigationMenuItem>
			  		<Button asChild variant="link">
						<Link href="#about-me">About-me</Link>
					</Button>
			  	</NavigationMenuItem>

				<NavigationMenuItem>
			  		<Button asChild variant="link">
						<Link href="#portfolio">Portfolio</Link>
					</Button>
			  	</NavigationMenuItem>

				<NavigationMenuItem>
					<Button asChild>
						<Link href="https://github.com/pedrolucaslcosta" target="_blank">GitHub</Link>
					</Button>
				</NavigationMenuItem>

			</NavigationMenuList>
		  </NavigationMenu>

		</nav>

		<main
		  className="bg-neutral-900 
	  px-4 sm:px-4 md:px-16 lg:px-24 xl:px-40 2xl:px-40
	  transition-all duration-500
	  "
		>
		  <section className="h-screen flex flex-col pt-24      ">
			<div className="text-neutral-50 font-bold font-space_grotesk flex flex-col justify-center h-full items-center gap-4">
			  <h1 className="text-7xl">I design and develop applications.</h1>
			  <div className="flex gap-2 mt-16">
				<span className="bg-neutral-800 border border-neutral-700 items-center gap-1.5 py-1.5 px-3 rounded-full text-sm font-medium">
				  React.js
				</span>
				<span className="bg-neutral-800 border border-neutral-700 items-center gap-1.5 py-1.5 px-3 rounded-full text-sm font-medium">
				  TailwindCSS
				</span>
				<span className="bg-neutral-800 border border-neutral-700 items-center gap-1.5 py-1.5 px-3 rounded-full text-sm font-medium">
				  Next.js
				</span>
				<span className="bg-neutral-800 border border-neutral-700 items-center gap-1.5 py-1.5 px-3 rounded-full text-sm font-medium">
				  Laravel
				</span>
				<span className="bg-neutral-800 border border-neutral-700 items-center gap-1.5 py-1.5 px-3 rounded-full text-sm font-medium">
				  Figma
				</span>
			  </div>

			  <a
				className="mt-8 gap-2   text-neutral-800 animate-bounce hover:text-neutral-50 transition-all duration-300"
				href="#about-me"
			  >
				<ChevronDownCircle size={32} />
			  </a>
			</div>
		  </section>
		</main>

		<main
		  className="px-4 sm:px-4 md:px-16 lg:px-24 xl:px-40 2xl:px-40
		bg-neutral-900 text-neutral-100"
		>
		  <section id="about-me" className="min-h-screen py-40">
			{/* <div
			className="flex items-center text-center justify-center pt-24 pb-16 text-3xl text-neutral-50"
		  >
			Sobre mim
		  </div> */}

			<div className="grid grid-cols-5 gap-4 ">
			  <div
				className="
			  col-span-5 lg:col-span-3 md:col-span-3 sm:col-span-3
			
			  lg:p-10 sm:p-8 p-6 
			  flex justify-center flex-col gap-4"
			  >
				<h2 className="text-3xl font-space_grotesk sm:text-5xl font-semibold text-neutral-100">
				  Integrating design and development.
				  {/* <MousePointer2 className="animate-bounce" size={32} /> */}
				</h2>

				<p className="text-base sm:text-md text-neutral-500">
				  {/* Com 4 anos de experiência no design, busco.... */}
				  {/* {
					"Atualmente trabalho como Desenvolvedor Fullstack Junior em Laravel e estou estudando React.js. Busco integrar design e código para proporcionar uma experiência de uso intuitiva e simplificada nos meus projetos."
				  } */}
				  {
					"I currently work as a Junior Fullstack Developer with Laravel and studying React.js. I seek to integrate design and code to provide an intuitive and user-friendly experience in my projects."
				  }
				</p>

				<div className="text-base sm:text-xl flex justify-center sm:justify-start gap-3 sm:gap-4 text-black">
					<Button asChild>
						<Link href="mailto:pedrolucaslcosta@gmail.com">Let&apos;s talk</Link>
					</Button>
					
					<Button asChild size="icon" variant="secondary">
						<Link href="https://www.instagram.com/pedrolucaslco" target="_blank">
							<AiFillInstagram className="h-5 w-5" />
						</Link>
					</Button>
					
					<Button asChild size="icon" variant="secondary">
						<Link href="https://www.linkedin.com/in/pedrolucaslcosta" target="_blank">
							<AiFillLinkedin className="h-5 w-5" />
						</Link>
					</Button>
					
					<Button asChild size="icon" variant="secondary">
						<Link href="https://www.x.com/pedrolucaslco" target="_blank">
						<RiTwitterXLine />
						</Link>
					</Button>
				  	
				</div>
			  </div>
			  <div className="col-span-5 lg:col-span-2 md:col-span-2 rounded-lg h-64 sm:h-96 relative">
				<Image
				  className="h-full w-full rounded-lg z-10 grayscale shadow-2xl object-cover border border-neutral-400 overflow-hidden"
				  src={profilePic}
				/>
			  </div>
			</div>
		  </section>
		</main>
		<main
		  className="px-4 sm:px-4 md:px-16 lg:px-24 xl:px-40 2xl:px-40
		bg-neutral-900"
		>
		  <section className="min-h-screen pb-40">
			<div
			  id="portfolio"
			  className="flex items-center text-center justify-center gap-4 pt-24 pb-16 text-3xl text-neutral-50"
			>
			  <span className="bg-neutral-700 w-full h-0.5"></span>
			  <span>Portfolio</span>
			  <span className="bg-neutral-700 w-full h-0.5"></span>
			  {/* <div className="flex items-center justify-center gap-2 py-2">
			  <div className="text-neutral-50 bg-neutral-900 p-2 text-sm rounded-lg">
				Dev
			  </div>
			  <div className="text-neutral-50 bg-neutral-900 p-2 text-sm rounded-lg">
				UI Design
			  </div>
			  <div className="text-neutral-50 bg-neutral-900 p-2 text-sm rounded-lg">
				Design
			  </div>
			</div> */}
			</div>

			{/* <div className="p-5 mt-4 dark:border-neutral-700 border-neutral-300 border flex flex-col items-center">
			<div className="text-base sm:text-xl flex justify-center sm:justify-start gap-3 sm:gap-4 text-black flex-wrap">
			  <a title="test" id="tools" className="p-3 rounded-2xl dark:border-neutral-700 border-neutral-300 border text-sky-800 dark:text-sky-100"><FaLaravel /><span>Laravel</span></a>
			  <a title="test" id="tools" className="p-3 rounded-2xl dark:border-neutral-700 border-neutral-300 border text-sky-800 dark:text-sky-100"><FaGithubSquare /><span>Git</span></a>
			  <a title="test" id="tools" className="p-3 rounded-2xl dark:border-neutral-700 border-neutral-300 border text-sky-800 dark:text-sky-100"><FaPhp /><span>PhP</span></a>
			  <a title="test" id="tools" className="p-3 rounded-2xl dark:border-neutral-700 border-neutral-300 border text-sky-800 dark:text-sky-100"><FaHtml5 /><span>HTML</span></a>
			  <a title="test" id="tools" className="p-3 rounded-2xl dark:border-neutral-700 border-neutral-300 border text-sky-800 dark:text-sky-100"><FaCss3Alt /><span>CSS</span></a>
			  <a title="test" id="tools" className="p-3 rounded-2xl dark:border-neutral-700 border-neutral-300 border text-sky-800 dark:text-sky-100"><FaFigma /><span>Figma</span></a>
			  <a title="test" id="tools" className="p-3 rounded-2xl dark:border-neutral-700 border-neutral-300 border text-sky-800 dark:text-sky-100"><GrMysql /><span>MySql</span></a>
			  <a title="test" id="tools" className="p-3 rounded-2xl dark:border-neutral-700 border-neutral-300 border text-sky-800 dark:text-sky-100"><FaReact /><span>React.js</span></a>
			  <a title="test" id="tools" className="p-3 rounded-2xl dark:border-neutral-700 border-neutral-300 border text-sky-800 dark:text-sky-100"><FaBootstrap /><span>Bootstrap</span></a>
			  <a title="test" id="tools" className="p-3 rounded-2xl dark:border-neutral-700 border-neutral-300 border text-sky-800 dark:text-sky-100"><SiJavascript /><span>Javascript</span></a>
			  <a title="test" id="tools" className="p-3 rounded-2xl dark:border-neutral-700 border-neutral-300 border text-sky-800 dark:text-sky-100"><SiTailwindcss /><span>TailwindCSS</span></a>
			</div>  
		  </div> */}

			<div
			  className=" text-slate-100 grid items-center
			sm:grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 
			gap-4 lg:gap-2"
			>
			  <PortfolioItem
				image={thumbNoisePlayer}
				category={"Design and Development"}
				title={"NoisePlayer"}
				description={
				  "A simple Brown Noise and Ambient Sounds Player to help focus on tasks."
				}
				href={"https://noise-player-pedrolucaslco.vercel.app/"}
				tags={["React.js", "TailwindCSS", "Vite"]}
			  />
			  <PortfolioItem
				image={thumbTodoListApp}
				category={"Design and Development"}
				title={"To-do List App"}
				description={
				  "A simple CRUD to-do list app for react.js practices."
				}
				href={
				  "https://to-do-list-react-js-pedrolucaslcosta.netlify.app/"
				}
				tags={["React.js", "Vite", "Bootstrap", "Sass"]}
			  />
			</div>
		  </section>
		</main>

		<footer
		  className="
	  px-4 sm:px-4 md:px-16 lg:px-24 xl:px-40 2xl:px-40
	  flex justify-between bg-black border-t-2 border-neutral-900 text-neutral-600 py-8
	  "
		>
		  <h1 className="uppercase font-bold tracking-[.3rem]">Pedro Lucas</h1>
		  <span>made by @pedrolucaslco</span>
		</footer>
	  </main>
	</div>
  );
}
