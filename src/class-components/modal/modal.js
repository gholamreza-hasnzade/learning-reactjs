import React, { Component } from 'react'

// * props in class Component
export class Modal extends Component {
  render() {
    return (
      <div>{this.props.message}</div>
    )
  }
}

export default Modal

// * defaultProps calss componets
Modal.defaultProps = {
  message: "default"
}