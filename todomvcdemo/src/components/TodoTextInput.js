import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TodoTextInput extends Component {
  // isRequired` to make sure a warning is shown if the prop isn't provided.
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  state = {
    text: this.props.text || ''
  }

  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    // if user press "enter" key. which
    /*
      Some browsers use keyCode, others use which. If you're using jQuery, you can reliably use which as jQuery
        var key = e.which || e.keyCode || 0;
    */
    if(e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: ''})
      }
    }
  }


  render() {
    return (
      <input 
        className = { classnames({ edit: this.props.editing, 'new-todo': this.props.newTodo})}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}

      />
    )
  }

}