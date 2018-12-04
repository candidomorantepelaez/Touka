import React from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import LinkButtonBlock from "touka/core/components/forms/buttons/link-button";
import ClientFile from "./client-file";
;

const ClientList = ({list, searching, onRemove}) => (
  (searching === true) ?
    <p><FormattedMessage id="core.loading" /></p>
    :
    <div className="container">
      <div className="row">
        <LinkButtonBlock
          path="/clients/new"
          text="clients.link.new.client"
        />
      </div>
      <div className="row">
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col"><FormattedMessage id="clients.field.name" /></th>
              <th scope="col"><FormattedMessage id="clients.field.phone" /></th>
              <th scope="col"><FormattedMessage id="core.actions" /></th>
            </tr>
          </thead>
          <tbody>
            { list.map((client, key) => (<ClientFile client={client} key={key} action={value => onRemove(value)} />)) }
          </tbody>
        </table>
      </div>
    </div>
);

ClientList.propTypes = {
  list: PropTypes.array,
  searching: PropTypes.bool,
  onRemove: PropTypes.func,
}

export default ClientList;
