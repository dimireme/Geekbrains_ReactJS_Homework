import React, { Component } from 'react';
import { Button, Modal, FormControl } from 'react-bootstrap';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRegistration = this.handleRegistration.bind(this);

		this.state = {
			show: false
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	handleSubmit() {
		//  TODO: Do something with Submit button
		this.setState({ show: false });
	}

	handleRegistration() {
		//  TODO: Do something with Registration button
		this.setState({ show: false });
	}

	render() {
		return (
			<div className="login">

				<Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
					Аутентификация
				</Button>

				<Modal show={this.state.show} onHide={this.handleClose} bsSize="small">
					<Modal.Header closeButton>
						<Modal.Title>Введите логин и пароль</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<FormControl type="text" placeholder="Login" />
						<FormControl type="password" placeholder="Password" />
						<a href="#">Забыли пароль?</a>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleClose}>Закрыть</Button>
						<Button onClick={this.handleRegistration}>Регистрация</Button>
						<Button onClick={this.handleSubmit}>Вход</Button>
					</Modal.Footer>
				</Modal>

			</div>
		);
	}
}
