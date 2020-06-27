import React from 'react';
import {Link} from 'react-router-dom';

const Layout = ({children}) => {
    const links = [
        {name: 'Dashboard', path: '/'},
        {name: 'Dashboard', path: '/'},
        {name: 'Dashboard', path: '/'},
        {name: 'Dashboard', path: '/'}

    ]
    return (
        <div className="w-full flex">
            <div className="w-1/50 bg-gray-800 min-h-screen">
                <div className="w-full h-20 bg-gray-700 flex items-center justify-center text-white">
                    Agartha
                </div>

                <div className="mt-12">
                    <ul className="list-reset">
                        {
                            links.map(link => {
                                return (
                                    <li className="w-full py-4 pl-4" key={link.name}>
                                        <Link className="text-white hover:text-gray-500" to={link.path}>
                                            {link.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="w-6/7 bg-gray-100 min-h-screen">
                <div className="w-full h-20 bg-main-blue-300 shadow flex items-center px-12">
                    <div className="w-1/6">
                        <input className="appearance-none border rounded w-full py-3 px-3 text-gray-700 rounded-full leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
                    </div>
                </div>
                <div className="">{children}</div>
            </div>
        </div>
    )
}

export default Layout;