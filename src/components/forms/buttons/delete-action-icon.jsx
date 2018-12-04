import React, { Component } from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";
import { FaTrash } from "react-icons/fa";
import Confirm from "components/modals/confirm";


class DeleteActionIcon extends Component{
  static propTypes = {
    action: PropTypes.func,
    title: PropTypes.string,
    text: PropTypes.string,
    button: PropTypes.bool,
    id: PropTypes.string,
    intl: intlShape.isRequired,
  }

  constructor(props){
    super(props);
    this.handlerEliminar = this.handlerEliminar.bind(this);
    this.state = {
      show: false,
    }
  }

  handlerEliminar() {
    this.setState({ show: false});
    this.props.action(this.props.id);
  }

  render() {
    return(
      <span
        data-toggle="tooltip"
        data-placement="top"
        title={this.props.intl.formatMessage({ id: "core.delete" })}
      >
        <FaTrash
          className="icono"
          onClick={() => this.setState({ show: true })}
        />
        <Confirm
          showModal={this.state.show}
          title={this.props.intl.formatMessage({ id: this.props.title })}
          text={this.props.intl.formatMessage({ id: this.props.text })}
          onClose={() => this.setState({ show: false })}
          onConfirm={() => this.handlerEliminar()}
        />
      </span>
    );
  }
}

export default injectIntl(DeleteActionIcon);
