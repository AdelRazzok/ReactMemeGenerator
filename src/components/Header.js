import logo from '../logo.svg'

export default function Header() {
	return (
		<div className='Header'>
			<div className="Header-logo">
				<img src={logo} alt='Meme generator svg logo' />
				<h1 className='Header-title'>MemeGenerator</h1>
			</div>
			<div className="Header-aside">By Delin0</div>
		</div>
	)
}