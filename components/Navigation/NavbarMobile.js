import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'
import { ImCross } from 'react-icons/im'

const NavbarMobile = ({ toggleNav, showNav }) => {
	const navStyle = showNav ? 'translate-x-0' : 'translate-x-[-100%]'

	return (
		<div
			className={`${navStyle} fixed right-0 transition-all duration-500 left-0 top-0 bottom-0 bg-[#000000e0] h-[100vh] z-[1002]`}
		>
			<ImCross
				className='absolute top-[1rem] right-[1rem] w-[1rem] h-[1rem] text-white'
				onClick={toggleNav}
			/>
			<div
				className={`${navStyle} bg-emerald-700 transition-all duration-500 delay-200 flex flex-col items-center justify-center w-[70%] h-[100%]`}
			>
				<ul className='space-y'>
					{headerNavLinks.map((data) => (
						<li
							key={data.href}
							className='text-lg font-medium hover:text-red-400'
						>
							<Link href={data.href}>{data.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
export default NavbarMobile
