import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="mt-[13vh] flex items-center px-10 justify-between">
        <div className="flex items-start flex-col flex-3">
          <h1 className="text-[3.75rem] font-semibold">Oblicz swój ślad węglowy</h1>
          <h1 className="text-[3.75rem] font-extrabold">I zadbaj o środowisko</h1>
          <Link to="/calculator" className="bg-green-800 px-12 py-6 mt-6 block rounded-full font-semibold text-4xl hover:shadow-2xl transition">Kalkulator</Link>
        </div>
          <img src="/assets/earth.png" alt="earth" className="aspect-square"/>
      </div>
    </>
  )
}

export default Home