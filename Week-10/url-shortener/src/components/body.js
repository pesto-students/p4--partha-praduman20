import React, { useState, useRef } from "react";
import bodyImg from "../images/bodyImg.png";
import { toast } from "react-toastify";
import "./style/body.css";

function Body() {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState([]);
  const textAreaRef = useRef(null);

  const fetchUrl = () => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`).then(async (res) => {
      const data = await res.json();
      setShorturl(data.result.short_link);
      setUrl("");
    });
  };

  const copyUrl = async (event) => {
    toast.success("Your short URL has been copied :)", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    textAreaRef.current.select();
    document.execCommand("copy");
    event.target.focus();
  };

  return (
    <>
      <div className="body">
        <div className="partone">
          <div className="card">
            <h2>We are here for you...</h2>
            <p>
              At the click of a button, our AI can shorten your link , help you
              get the brand recognition you need.
            </p>
          </div>
          <div className="card-image">
            <img src={bodyImg} alt="body-img" className="body-image" />
          </div>
        </div>
        <div className="form-sec">
          <div className="form">
            <input
              type="text"
              placeholder="Shorten your link..."
              value={url}
              onChange={(event) => {
                setUrl(event.target.value);
              }}
            />
            <button className="button" onClick={fetchUrl}>
              Shorten it
            </button>
          </div>
        </div>

        <div className="form-sec2">
          <div className="form2">
            <input
              type="text"
              placeholder="Copy it from here..."
              ref={textAreaRef}
              value={shorturl}
            />
            <button onClick={() => copyUrl()}>Copy</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
