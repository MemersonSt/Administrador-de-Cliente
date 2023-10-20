import { Outlet, Link, useLocation } from "react-router-dom"

function Layout() {
    const location = useLocation();
    return (
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 px-5 py-10 bg-blue-500">
                <h2 className="text-4xl font-black text-center text-white">CRM - Cliente</h2>
                <nav className="m-10">
                    <Link 
                        className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 text-white`} 
                        to='/'>Cliente</Link>
                    <Link 
                        className={`${location.pathname === '/nuevo/cliente' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 text-white`} 
                        to='/nuevo/cliente'>About</Link>
                </nav>
            </aside>
            <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;