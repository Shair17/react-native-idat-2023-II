import { Component } from 'react';

export class Clase extends Component {
	componentDidMount() {
		console.log('el componente se ha montado!');
	}

	componentDidCatch() {
		console.log('el componente tuvo un error');
	}

	componentDidUpdate() {
		console.log('el componente se ha actualizado');
	}

	componentWillUnmount() {
		console.log('el componente se va a desmontar');
	}

	render() {
		return <h1>Clase {this.props.contador}</h1>;
	}
}
