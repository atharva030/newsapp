import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } =
    props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <span
        className="position-absolute top-0 translate-middle badge rounded-pill bg-primary"
        style={{ left: "90%" }}
      >
        {source}
      </span>
      <h5
        className="card-header text-center"
        style={{
          height: "2rem",
          fontSize: "15px",
          background: "#665b5b",
          padding: "5px",
          color:"white"
        }}
      >
        By {author ? author : "Unknown"}
      </h5>
      <img
        src={
          !imageUrl
            ? "https://images.hindustantimes.com/img/2022/07/10/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1657497574624.jpeg"
            : imageUrl
        }
      />
      <div className="card-body">
        <h5 className="card-title">
          {title}
          {title.length > 28 ? "" : "..."}
        </h5>
        <p className="card-text">
          {description}
          {description.length > 88 ? "" : "..."}
        </p>
        <p className="card-text">
          <small className="text-muted">
            Published on {new Date(date).toGMTString()}
          </small>
        </p>
      </div>

      <div className="card-body">
        <a href={newsUrl} target="_blank" className="btn btn-sm btn-danger">
          Read More
        </a>

        {/* target="_blank" this will open side on new tab */}
      </div>
    </div>
  );
};

export default NewsItem;
