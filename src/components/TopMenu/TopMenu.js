import React from 'react';
import './TopMenu.scss';

//Dependencies
import { Container, Navbar, Nav } from 'react-bootstrap';

//Assets
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

export default function TopMenu() {
	return (
		<Navbar bg='dark' variant='dark' className='top-menu'>
			<Container>
				<BrandNav />
				{/* TODO: Crear Menu */}
				{/* TODO: Crear Carrito de compras */}

				<h1>Hola Desde el NavBar de TopMenu Component</h1>
			</Container>
		</Navbar>
	);
}

function BrandNav() {
	return (
		<Navbar.Brand>
			<Logo />
			<h2>Helados Aarcadio</h2>
		</Navbar.Brand>
	);
}
