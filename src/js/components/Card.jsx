import React from "react";

const Card = (props) => {
  return (
    <div className="col">
      <div className="card h-100 text-center" style={{ minHeight: "480px" }}>

        <div style={{
          backgroundColor: "#cccccc",
          width: "100%",
          height: "220px", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          color: "#666"
        }}>
          500 x 325
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{props.title}</h5>
          <p className="card-text flex-grow-1">{props.description}</p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  );
};

export default Card;