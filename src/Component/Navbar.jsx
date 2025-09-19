const Navbar = () => {
  return (
    <div className="navbar fixed w-full transition-all py-4 ">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between ">
          <div className="logo">
            <h1 className="text-2xl font-bold ">Ngoding</h1>
          </div>
            <ul className="flex lg:gap-12 md:static gap-8 fixed left-0 top-1/2 -translate-1/2">
              <li>
                <a href="#" className="font-medium opacity-70">Beranda</a>
              </li>
              <li>
                <a href="#"  className="font-medium opacity-70">Tentang kami</a>
              </li>
              <li>
                <a href="#"  className="font-medium opacity-70">Layanan</a>
              </li>
              <li>
                <a href="#"  className="font-medium opacity-70">Proyek</a>
              </li>
            </ul>
            <div className="social">
              <a href="#" className="bg-sky-400 py-2 px-5 rounded-full text-white font-black hover:bg-sky-500 transition-all">
                Social Media</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar