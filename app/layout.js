import { Lora } from 'next/font/google'
import './globals.css'
import NavbarResponsive from '@/components/Navigation/NavbarResponsive'
import { siteMetadata } from '@/data/siteMetadata'

const lora = Lora({ subsets: ['latin'] })

export const metadata = {
	title: siteMetadata.title,
	description: siteMetadata.description,
	openGraph: {
		title: siteMetadata.title,
		description: siteMetadata.description,
		url: './',
		siteName: siteMetadata.title,
		images: [siteMetadata.socialBanner],
		locale: 'en_US',
		type: 'website',
	},
	alternates: {
		canonical: './',
		types: {
			'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
		},
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export default function RootLayout({ children }) {
	return (
		<html
			lang={siteMetadata.language}
			suppressHydrationWarning
			className='scroll-smooth'
		>
			<meta charset='utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<body
				suppressHydrationWarning={true}
				className={`${lora.className} antialiased`}
			>
				<NavbarResponsive />
				{children}
			</body>
		</html>
	)
}
