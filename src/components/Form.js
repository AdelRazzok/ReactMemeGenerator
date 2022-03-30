export default function Form() {
	return (
		<div className='Form'>
			<input type="text" placeholder='Your top text here...' className='Form-input' />
			<input type="text" placeholder='Your bottom text here...' className='Form-input' />
			<button type='button' className='Form-button'>
				Get a new meme image 🖼️
			</button>
		</div>
	)
}