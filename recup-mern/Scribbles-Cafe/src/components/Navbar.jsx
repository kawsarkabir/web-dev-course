import { useState } from "react";
import { NavLink } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='bg-gray-900 text-white px-6 py-4 shadow-md'>
			<div className='container mx-auto px-4 flex justify-between items-center'>
				<NavLink to='/' className='text-2xl font-bold tracking-wide'>
					DevZeroOne
				</NavLink>
				<ul className='hidden md:flex space-x-6'>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/blogs'>Blogs</NavLink>
					</li>
					<li>
						<NavLink to='/login'>Login</NavLink>
					</li>
					<li>
						<NavLink to='/Register'>Register</NavLink>
					</li>
				</ul>
				<button
					className='md:hidden text-2xl'
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <FiX /> : <FiMenu />}
				</button>
			</div>
			{isOpen && (
				<ul className='md:hidden mt-4 flex flex-col space-y-4 text-center'>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/blogs'>Blogs</NavLink>
					</li>
					<li>
						<NavLink to='/login'>Login</NavLink>
					</li>
					<li>
						<NavLink to='/Register'>Register</NavLink>
					</li>
				</ul>
			)}
		</nav>
	);
}
