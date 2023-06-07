'use client'

import CustomSvg from "@/components/CustomSvg"

const About = () => {
  return (
    <div className="px-[15vw] py-[40px] sm:py-[60px] text-xl">

        <h1 className="font-bold text-4xl mb-7 text-center sm:text-left">
          About 
        </h1>
        

      <p className="leading-8 text-center sm:text-left">
        GoEco to projekt zrobiony na konkurs <a href="https://nowaakademia.org/mini-hackathon/mini-hackathon-edycja-iii/" target="_blank" className="text-white font-bold relative">
          Mini Hackaton
          <CustomSvg StrokeWidth="16" />
          </a>. Jego głównym celem jest pokazanie społeczeństwu jak złe dla środowiska są zmiany klimatyczne. GoEco pozawla na zmierzenie swojego śladu węglowego. Możesz zobaczyć nasz kod źródłowy na <a href="https://github.com/janekskr/GoEco" target="_blank" className="text-white font-bold relative">
          Githubie
          <CustomSvg Top="4px" />
          </a>.
      </p>
      <p className="my-5 text-center sm:text-left">W tym projekcie użyliśmy wiele nowoczesnych narzędzi takich jak:</p>

      <ul className="list-disc pl-6 flex flex-col gap-[10px]">
        <li>
          <a href="https://nextjs.org" target="_blank" className="border-b-[3px] border-white font-semibold sm:hover:opacity-[.7] transition">Next.js</a> and <a href="https://react.dev/" target="_blank" className="border-b-[3px] border-white font-semibold sm:hover:opacity-[.7] transition">React.js</a>
        </li>
        <li>
          <a href="https://typescriptlang.org/" target="_blank" className="border-b-[3px] border-white font-semibold sm:hover:opacity-[.7] transition">Typescript</a>
        </li> 
        <li>
          <a href="https://tailwindcss.com" target="_blank" className="border-b-[3px] border-white font-semibold sm:hover:opacity-[.7] transition">Tailwind CSS</a>
        </li>
        <li>
          <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" target="_blank" className="border-b-[3px] border-white font-semibold sm:hover:opacity-[.7] transition">React Three Fiber</a> and <a href="https://threejs.org/" target="_blank" className="border-b-[3px] border-white font-semibold sm:hover:opacity-[.7] transition">Three.js</a> 
        </li>
        <li>
          <a href="https://postcss.org/" target="_blank" className="border-b-[3px] border-white font-semibold sm:hover:opacity-[.7] transition">Postcss</a>
        </li>
        <li>
          <a href="https://eslint.org/" target="_blank" className="border-b-[3px] border-white font-semibold sm:hover:opacity-[.7] transition">ESLint</a>
        </li>
      </ul>
    </div>
  )
}

export default About