import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'
import { CiCoffeeCup } from 'react-icons/ci'
import { HiBars3BottomRight } from 'react-icons/hi2'

const Navbar = ({ toggleNav }) => {
	return (
		<nav className='h-[12vh]'>
			<div className='sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between'>
				<Link href='/'>
					<div className='flex items-center space-x-1'>
						<CiCoffeeCup className='w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem]' />
						<h1 className='text-xl font-bold'>KopiSob</h1>
					</div>
				</Link>

				<ul className='hidden lg:flex items-center space-x-10'>
					{headerNavLinks.map((data) => (
						<li
							key={data.href}
							className='text-lg font-medium hover:text-red-400'
						>
							<Link href={data.href}>{data.title}</Link>
						</li>
					))}
				</ul>

				<HiBars3BottomRight
					className='lg:hidden w-[2rem] h-[2rem] text-black'
					onClick={toggleNav}
				/>
			</div>
		</nav>
	)
}
export default Navbar
