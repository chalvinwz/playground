import Card from '@/components/Card'
import Image from 'next/image'
import { data } from '../utils/card-data'

export default function Home() {
	return (
		<>
			<div
				className='hero min-h-screen'
				style={{
					backgroundImage:
						'url(https://plus.unsplash.com/premium_photo-1675435646764-54d18dab6bd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
				}}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center text-neutral-content'>
					<div className='max-w-md'>
						<h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
						<p className='mb-5'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						{/* <button className='btn btn-primary'>Get Started</button> */}
					</div>
				</div>
			</div>
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					<img
						src='https://plus.unsplash.com/premium_photo-1664191866037-23a8cea141bd?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						className='max-w-sm rounded-lg shadow-2xl'
					/>
					<div>
						<h1 className='text-4xl font-bold'>Best Coffee Shop in Town!</h1>
						<p className='py-6'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
