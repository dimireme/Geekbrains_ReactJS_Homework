import React, {PureComponent} from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

export default class DescriptionModal extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			pokemon: this.props.pokemon,
			modal: this.props.context.modal
		}
	}

	componentWillReceiveProps(){
		this.setState({
			pokemon: this.props.pokemon,
			modal: this.props.context.modal
		});
	}

	static propTypes = {
		pokemon: PropTypes.shape({
			src: PropTypes.string,
			name: PropTypes.string,
			effect: PropTypes.string
		}),
		context: PropTypes.object.isRequired
	};

	render() {
		const { pokemon, context } = this.props;
		return (
			<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
				<ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
				<ModalBody>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
					<Button color="secondary" onClick={this.toggle}>Cancel</Button>
				</ModalFooter>
			</Modal>

		);
	}
}


{/*
 <Modal isOpen={context.state.modal} toggle={context.toggle}>
 <ModalHeader toggle={context.toggle}>Modal title</ModalHeader>
 <ModalBody>
 Modal body
 {	console.log(`From modal:`) }
 {	console.log(pokemon) 		}
 {console.log(context)}
 </ModalBody>
 <ModalFooter>
 <Button color="primary" onClick={context.toggle}>Do Something</Button>{' '}
 <Button color="secondary" onClick={context.toggle}>Cancel</Button>
 </ModalFooter>
 </Modal>

 */}