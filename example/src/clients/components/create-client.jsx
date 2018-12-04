import React from "react";
import PropTypes from "prop-types";
import Form from "touka/core/components/forms/form";
import createClientForm from "./../forms/create-client-form";

const CreateClient = ({ onSave }) => (
  <Form
    actions={createClientForm.actions}
    onSubmit={value => onSave(value)}
    fields={createClientForm.fields}
  />
);

CreateClient.propTypes = {
  onSave: PropTypes.func,
};

export default CreateClient;
