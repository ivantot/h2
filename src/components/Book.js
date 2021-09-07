import "./Book.css";

const Book = (props) => {
  console.log(props.data);
  return (
    <div className="Book-card">
      <img src={props.data.book_cover} alt="Book cover" className="Book-img" />
      <p className="Book-title">"{props.data.title}"</p>
      <p className="Book-author">{props.data.author}</p>
      <p className="Book-publishing-year">pub. {props.data.publish_date}</p>
      <div>
        <span>
          <i className="far fa-star star"></i>
        </span>
        <span>
          <i className="far fa-star star"></i>
        </span>
        <span>
          <i className="far fa-star star"></i>
        </span>
        <span>
          <i className="far fa-star star"></i>
        </span>
        <span>
          <i className="far fa-star star"></i>
        </span>
        <button className="Book-edit-button">
          <i className="fas fa-pencil-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Book;
