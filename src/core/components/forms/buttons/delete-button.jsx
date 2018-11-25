import React, { Component } from "react";
import PropTypes from "prop-types";
import Confirm from "core/components/modals/confirm"
import { injectIntl, intlShape, FormattedMessage } from "react-intl";

class DeleteButton extends Component{
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
      <div>
        <button
          className="btn btn-danger boton-tarjeta"
          onClick={() => this.setState({ show: true })}
        >
          <FormattedMessage id="core.delete" />
        </button>
        <Confirm
            showModal={this.state.show}
            title={this.props.intl.formatMessage({ id: this.props.title })}
            text={this.props.intl.formatMessage({ id: this.props.text })}
            onClose={() => this.setState({ show: false })}
            onConfirm={() => this.handlerEliminar()}
          />
      </div>
    );
  }
}

export default injectIntl(DeleteButton);