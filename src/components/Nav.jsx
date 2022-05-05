import { Link } from 'react-router-dom';

function Nav({useremail}) {
    return (
        <nav className="bg-indigo-700 shadow-lg">
            <div className="container mx-auto">
                <div className="sm:flex justify-around">
                    <a href="#" className="text-white text-3xl font-bold p-3">Padre Vlog</a>

                    <ul className="text-gray-400 sm:self-center text-xl border-t sm:border-none">
                        <li className="sm:inline-block">
                            <Link to="/page2" className="p-3 hover:text-white">Page 2</Link>
                        </li>
                        <li className="sm:inline-block">
                            <Link to="/" className="p-3 hover:text-white">Page 3</Link>
                        </li>
                        <li className="sm:inline-block">
                            <Link to="/" className="p-3 hover:text-white">Page 4</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
