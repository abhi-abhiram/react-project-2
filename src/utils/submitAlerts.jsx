import axios from "axios";
import reactDom from "react-dom";

function submitAlerts(alertsContainer, address) {
  const validators = [];
  alertsContainer.current.childNodes.forEach((value) => {
    if (value.lastChild.checked) {
      validators.push(
        reactDom.findDOMNode(
          reactDom
            .findDOMNode(value.firstChild)
            .getElementsByClassName("validator")["0"]
        ).lastChild["data"]
      );
    }
  });

  axios
    .post("/api/rmAlerts", { address: address, validators: validators })
    .then((value) => {
      if (value.data.updated) {
        alert("Updated Successfully");
      }
    });
}

export default submitAlerts;
