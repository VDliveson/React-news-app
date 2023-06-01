import React from "react";

export default function NewsItem({
  title,
  description,
  imageUrl,
  newsUrl,
  sourceName,
  authorName,
  date,
}) {
  return (
    <div>
      <div className="card my-2 mx-1" style={{ width: "18rem" }}>
        <div>
          <span
            className="badge rounded-pill bg-danger"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            {sourceName}
          </span>
        </div>

        <img height="150px" src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} className="btn btn-dark">
            Read more
          </a>
          <p className="card-text fs-6">
            <small className="text-body-secondary ">
              By: {authorName} on {date}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
