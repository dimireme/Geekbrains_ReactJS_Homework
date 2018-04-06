import React, {PureComponent} from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

export default class Description extends PureComponent {
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