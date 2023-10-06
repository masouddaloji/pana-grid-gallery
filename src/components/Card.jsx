const Card = ({
  title,
  subTitle,
  caption,
  onClick,
  isSelected,
  handleToggleInfo,
}) => {
  return (
    <div
      className={`card ${isSelected ? "selected" : "unselected"} `}
      onClick={onClick}
    >
      <div className="card__img-box">
        <img
          src="https://source.unsplash.com/300x225/?wave"
          alt="img card"
          className="card__img"
        />
      </div>
      <div className="card__content">
        <div className="card-title">
          <button className="toggle-info btn" onClick={handleToggleInfo}>
            <span className="left"></span>
            <span className="right"></span>
          </button>
          <h2>
            {title}
            <small>{subTitle}</small>
          </h2>
        </div>
        <div className="card-description">{caption}</div>
        <div className="card-actions">
          <a href="#" className="btn">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
