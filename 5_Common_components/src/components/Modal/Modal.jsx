import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open modal
      </button>
      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Modal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus soluta, esse perspiciatis suscipit nesciunt illo!
                Quam odit harum delectus excepturi veritatis maxime. Enim
                possimus, deleniti accusamus delectus sed minima fuga
                necessitatibus, nisi magnam aperiam dolorum voluptatum,
                doloribus numquam veniam ad cum praesentium officia quasi ullam
                saepe? Officiis quo cum nesciunt.
              </p>
              <button onClick={toggleModal} className="close-modal">
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
