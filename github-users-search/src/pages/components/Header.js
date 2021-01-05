import logo from '../../assets/images/logo.svg';

function Header() {
	return (
		<header className="page-header">
			<div className="pwr"><div className="pct">

				<div className="logo">
					<img src={logo} className="logo__image" alt="logo" />
					<div className="logo__name">
						<div className="logo__name__title">REQUESTUM</div>
						<div className="logo__name__subtitle">web development company</div>
					</div>
				</div>
				<h1 className="app-name">Github users search app</h1>

			</div></div>
		</header>
	)
}

export default Header;