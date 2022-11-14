import "./style.css";

const ImagewithDescription = (props) => {
  const { className, data } = props;
  return (
    <div
      className={`image-with-description-section ${className ? className : ""}`}
    >
      <div className="image-with-description-section-image">
        <img src={data.imageUrl} alt={data.title} />
      </div>
      <div className="image-with-description-section-content">
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default ImagewithDescription;
