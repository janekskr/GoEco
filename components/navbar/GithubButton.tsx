import {BsGithub} from 'react-icons/bs'

const GithubButton = () => {
  return (
    <a href="https://github.com/janekskr/GoEco"target='_blank' className="shadow-sm hover:shadow-lg bg-black p-3 rounded-xl inline-flex item-center gap-[10px]">
        <BsGithub size={30}/>
        <p className="text-md pt-[2.5px] font-semibold">Repozytorium</p>
    </a>
  )
}

export default GithubButton