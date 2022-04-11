import {useState} from 'react'
import memesData from '../memesData'

export default function Meme() {
	const [formData, setFormData] = useState(
		{firstName: '', lastName: ''}
	)
	const handleChange = (event) => {
		setFormData(prev => {
			return {
				...prev,
				[event.target.name]: event.target.value
			}
		})
	}

	const getMemeImg = () => {
		const memesArray = memesData.data.memes
		const randomInt = Math.floor(Math.random() * memesArray.length)
		return memesArray[randomInt].url
	}
	const [meme, setMeme] = useState({
		topText: '',
		botText: '',
		imgUrl: getMemeImg()
	})
	const handleClick = () => setMeme(prevMeme => ({
		...prevMeme,
		imgUrl: getMemeImg()
	}))
	
	return (
		<main className='Meme'>
			<div className='Form'>
				<input
					type='text'
					placeholder='Your top text here...'
					className='Form-input'
					name='firstName'
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='Your bottom text here...'
					className='Form-input'
					name='lastName'
					onChange={handleChange}
				/>
				<button
					type='button'
					onClick={handleClick}
					className='Form-button'
				>
					Get a new meme image 🖼️
				</button>
			</div>
			<img src={meme.imgUrl} alt='Meme image' className='Meme-image' />
		</main>
	)
}