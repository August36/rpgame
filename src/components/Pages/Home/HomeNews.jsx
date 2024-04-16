import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HomeNews(props) {
  return (
    <article>
        <figure className="article_img_container">
          <img src="imgs/heroImg.jpg" alt="" />
        </figure>
        <div className="article_text">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <Link to="/">{props.linkName}</Link>
        </div>
    </article>
  );
}

// Prop validation
HomeNews.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired
};

export default HomeNews;
