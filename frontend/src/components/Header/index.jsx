import { Link } from "react-router-dom"
import Container from "../Container"


const Header = () => {
  return (
    <header className="border-b">
      <Container designs="p-5 ">
        <div className="flex justify-between items-center ">
          <h1 className="font-bold text-3xl ">
            <Link to={"/"} >
              <span className="bg-blue-600 text-white">Ma</span>
              <span className="bg-red-500 text-white">Gezi</span>
              <span className="bg-green-500 text-white">Sen</span>
            </Link>
          </h1>

          <nav className="flex gap-3 font-bold text-zinc-500">
            <Link to={"/"} >Oteller</Link>
            <Link className="max-md:hidden" to={"/"} >Popüler</Link>
            <Link to={"/admin/create"} >Oluştur</Link>
          </nav>

          <div className="flex items-center gap-2">
            <button className="border border-blue-500 rounded-full py-1 px-5 max-md:hidden">Kayıt Ol</button>
            <button className="bg-blue-500 rounded-full py-2 px-5 text-white">Giriş Yap</button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
