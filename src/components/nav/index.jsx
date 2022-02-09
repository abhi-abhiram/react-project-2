import { useRef } from "react";
import mapAlerts from "../../utils/mapAlerts";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import logo from "../../logo.png";
import "./style.css";

function Nav({ setAlerts, setSwitchPage, setNewIndex }) {
  const inputField = useRef(null);
  const button = useRef(null);

  const getAlerts = async () => {
    setSwitchPage(true);
    setAlerts(null);
    setNewIndex(4);
    const address = inputField.current.value.trim();
    inputField.current.value = "";
    try {
      await axios
        .post("/api/getAlerts", { address: address })
        .then((value) =>
          mapAlerts(value.data, setAlerts, address, value.status)
        );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <div className="search-box">
        <input
          className="search-field"
          type="text"
          placeholder="Enter The Address Here"
          ref={inputField}
          onKeyPress={(e) => {
            if (e.key === "Enter" && inputField.current.value !== "") {
              button.current.click();
            }
          }}
        />
        <button className="search-button" ref={button} onClick={getAlerts}>
          <AiOutlineSearch size={25} />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
