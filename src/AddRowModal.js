import React, { Component } from 'react';
import { Modal, Form, FormGroup, FormControl, ControlLabel, Col, Button } from 'react-bootstrap';

class AddRowModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      foodSales: 0,
      drinkSales: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state, this.props.serverType)
    this.props.addServer(this.state, this.props.serverType)
    this.props.handleClose();
  }

  render () {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Add A New { this.props.serverType }</Modal.Title>
            <Button onClick={ this.props.handleClose }>X</Button>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <FormGroup controlId="name">
                <Col xs={ 3 }>
                  <ControlLabel>Name</ControlLabel>
                </Col>
                <Col xs={ 9 }>
                  <FormControl
                    type="text"
                    placeholder="Name"
                    onChange={ this.handleChange }
                  />
                </Col>
              </FormGroup>
              <FormGroup controlId="foodSales">
                <Col xs={ 3 }>
                  <ControlLabel>Food Sales</ControlLabel>
                </Col>
                <Col xs={ 9 }>
                  <FormControl
                    type="text"
                    placeholder="0.00"
                    onChange={ this.handleChange }
                  />
                </Col>
              </FormGroup>
              <FormGroup controlId="drinkSales">
                <Col xs={ 3 }>
                  <ControlLabel>Drink Sales</ControlLabel>
                </Col>
                <Col xs={ 9 }>
                  <FormControl
                    type="text"
                    placeholder="0.00"
                    onChange={ this.handleChange }
                  />
                </Col>
              </FormGroup>
              <Button type="submit" onClick={ this.handleSubmit }>Save</Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    )
  }
}

export default AddRowModal;