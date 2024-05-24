'use client'
import { useState } from 'react'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'

const NavbarResponsive = () => {
	const [showNav, setShowNav] = useState(false)

	const toggleNav = () => setShowNav(!showNav)

	return (
		<>
			<Navbar toggleNav={toggleNav} />
			<NavbarMobile toggleNav={toggleNav} showNav={showNav} />
		</>
	)
}
export default NavbarResponsive
