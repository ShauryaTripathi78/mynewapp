import Link from 'next/link';
import * as React from 'react';
function Navbar() {
    return ( 
        <>
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-bold">My Clinic</div>
                    <ul className="flex space-x-4">
                        <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
                        <li><Link href="/about" className="text-white hover:text-gray-300">About</Link></li>
                        <li><Link href="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
                        <li><Link href="/appointment" className="text-white hover:text-gray-300">appointment</Link></li>
                        <li><Link href="/medicineStore" className="text-white hover:text-gray-300">Medicine Store</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className="bg-gray-200 p-4">
            <h1 className="text-center text-2xl font-bold">Welcome to My Clinic</h1>
            <p className="text-center text-gray-600">Your health is our priority</p>
        </div>
        </>
     );
}

export default Navbar;