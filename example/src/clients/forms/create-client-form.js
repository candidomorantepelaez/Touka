import React from "react";
import SubmitButton from "touka/core/components/forms/buttons/submit-button";
import BackButton from "touka/core/components/forms/buttons/back-button";

const createClientForm = {
  actions: [<SubmitButton />, <BackButton />],
  fields: [
    {
      name: "name",
      label: "clients.field.name",
      type: "text",
      className: "col-xl-12 col-lg-12 col-md-12 col-sm-12",
      required: true,
      validateOnBlur: value => {
        const alphaNumericRegex = /^[a-z0-9 ]+$/;
        if(!alphaNumericRegex.test(value)){
          return { status: "error", message: "core.validations.alphanumeric" };
        }
        if(value.lenght >= 200){
          return { status: "error", message: "core.validations.maxlong" };
        }
        return;
      },
    }, {
      name: "phone",
      label: "clients.field.phone",
      type: "text",
      className: "col-xl-4 col-lg-4 col-md-6 col-sm-12",
      required: true,
    }, 
  ]
}

export default createClientForm;
