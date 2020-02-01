import React from "react";

const Cards = () => {
  return (
    <div className="main">
      <h1 style={{ textAlign: "center" }}>HERE'S HOW JETCAKE WORKS</h1>
      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src="https://picsum.photos/500/300/?image=10" alt="img" />
            </div>
            <div className="card_content">
              <h2 className="card_title">Step 1: Interviews</h2>
              <p className="card_text">
                Apply here at JetCake. You will go through a challenging yet
                friendly sets of interviews. Top candidates will be invited to
                Step 2
              </p>
              <button className="btn card_btn">Read More</button>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src="https://picsum.photos/500/300/?image=5" alt="src" />
            </div>
            <div className="card_content">
              <h2 className="card_title">Step 2: Coaching</h2>
              <p className="card_text">
                You will be coached through a series of real-world projects that
                will hone your skills in effective communication and accurate
                estimation.
              </p>
              <button className="btn card_btn">Read More</button>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src="https://picsum.photos/500/300/?image=11" alt="img" />
            </div>
            <div className="card_content">
              <h2 className="card_title">Step 3: Job placement</h2>
              <p className="card_text">
                If you complete all projects successfully, you will be connected
                with top tech companies at JetCake Network and will be given
                ongoing support.
              </p>
              <button className="btn card_btn">Read More</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Cards;
