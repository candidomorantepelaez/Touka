import React from "react";
import PropTypes from "prop-types";
import EditButton from "touka/core/components/forms/buttons/edit-button";
import BackButton from "touka/core/components/forms/buttons/back-button";
import DeleteButton from "touka/core/components/forms/buttons/delete-button";
import ClientTarget from "./client-target";

const DetailClient = ({client, onRemove}) => (
  <div className="row">
    <ClientTarget
      client={client}
    />
    <EditButton
      path={"/clients/edit/"+client._id}
    />
    <DeleteButton
      title="clients.action.confirm.delete.title"
      text="clients.action.confirm.delete.text"
      id={ client._id }
      action={value => onRemove(value)}
    />
    <BackButton />
  </div>
);

DetailClient.propTypes = {
  client: PropTypes.object,
  onRemove: PropTypes.func,
}

export default DetailClient;
