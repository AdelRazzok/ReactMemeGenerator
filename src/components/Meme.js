import {useState} from 'react'
import memesData from '../memesData'

export default function Meme() {
	const getMemeImg = () => {
		const memesArray = memesData.data.memes
		const randomInt = Math.floor(Math.random() * memesArray.length)
		return memesArray[randomInt].url
	}
	const [url, setUrl] = useState(getMemeImg)
	const handleClick = () => setUrl(getMemeImg)
	
	return (
		<main className='Meme'>
			<div className='Form'>
				<input type="text" placeholder='Your top text here...' className='Form-input' />
				<input type="text" placeholder='Your bottom text here...' className='Form-input' />
				<button type='button' onClick={handleClick} className='Form-button'>
					Get a new meme image 🖼️
				</button>
			</div>
			<img src={url} alt='Meme image' className='Meme-image' />
		</main>
	)
}