const Card = ({ title, link }) => {
	return (
		<div className='card card-compact w-96 max-h-64 bg-base-100 shadow-xl'>
			<figure>
				<img src={link} alt={title} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
			</div>
		</div>
	)
}
export default Card
