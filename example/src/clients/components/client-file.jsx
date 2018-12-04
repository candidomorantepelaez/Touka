import React from "react";
import PropTypes from "prop-types";
import DeleteActionIcon from "touka/core/components/forms/buttons/delete-action-icon";
import DetailActionIcon from "touka/core/components/forms/buttons/detail-action-icon";
import EditActionIcon from "touka/core/components/forms/buttons/edit-action-icon";

const ClientFile = ({ client, action, intl}) => (
  <tr>
    <td>{ client.nombre }</td>
    <td>{ client.phone }</td>
    <td>
      <DetailActionIcon
        path={"/clients/detail/"+client._id}
      />
      <EditActionIcon
        path={"/clients/edit/"+client._id}
      />
      <DeleteActionIcon
        title="clients.action.confirm.delete.title"
        text="clients.action.confirm.delete.text"
        id={ client._id }
        action={(value) => action(value)}
      />
    </td>
  </tr>
);

ClientFile.propTypes = {
  client: PropTypes.object,
  action: PropTypes.func,
}

export default ClientFile;
