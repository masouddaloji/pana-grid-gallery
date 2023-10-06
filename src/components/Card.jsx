
const Card = ({ title, subTitle, caption, onClick, isSelected,handleToggleInfo, isEmptySelected  }) => {
  return (
    <div
      className={`card ${(isSelected ) ? "selected" : ""} `}
      onClick={onClick}
    >
    <div className="card__img-box">
      <img src="https://source.unsplash.com/300x225/?wave" alt="img card" className="card__img"/>
    </div>
      <div className="card-title">
      <button class="toggle-info btn" onClick={handleToggleInfo}>
        <span class="left"></span>
        <span class="right"></span>
      </button>
        <h2>
          {title}
          <small>{subTitle}</small>
        </h2>
      </div>
      <div className="card-flap ">
        <div className="card-description">{caption}</div>
        <div className="card-flap ">
          <div className="card-actions">
            <a href="#" className="btn">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
