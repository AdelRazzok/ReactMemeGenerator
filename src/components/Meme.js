import {useState} from 'react'
import memesData from '../memesData'

export default function Meme() {
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

	const handleChange = (event) => {
		const {name, value} = event.target

		setMeme(prevMeme => ({
			...prevMeme,
			[name]: value
		}))
	}
	
	return (
		<main className='Meme'>
			<div className='Form'>
				<input
					type='text'
					placeholder='Your top text here...'
					className='Form-input'
					name='topText'
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='Your bottom text here...'
					className='Form-input'
					name='botText'
					onChange={handleChange}
				/>
				<button
					type='button'
					className='Form-button'
					onClick={handleClick}
				>
					Get a new meme image 🖼️
				</button>
			</div>

			<div className="Meme-image">
				<img src={meme.imgUrl} alt='Meme image' className='Meme-image' />
				<span className="Meme-text top-text">{meme.topText.toUpperCase()}</span>
				<span className="Meme-text bot-text">{meme.botText.toUpperCase()}</span>
			</div>
		</main>
	)
}