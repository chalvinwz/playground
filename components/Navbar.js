import ThemeController from './ThemeController'

const Navbar = () => {
	return (
		<header className='navbar bg-base-100 sticky top-0 z-50'>
			<div className='flex-1'>
				<a className='btn btn-ghost text-xl'>kopisob</a>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<a>Link</a>
					</li>
					<li>
						<a>Link</a>
					</li>
					{/* <li>
						<ThemeController />
					</li> */}
				</ul>
			</div>
		</header>
	)
}
export default Navbar
