import { NewsArticle } from "../models/NewsArticle";
import defaultImage from "../public/imagenotfound.png";

interface NewsArticleProps {
  article: NewsArticle;
}

const NewsCard = ({
  article: { title, url, urlToImage },
}: NewsArticleProps) => {
  const validImageUrl =
    (urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")) &&
    urlToImage;
  return (
    <div className="card mb-3 p-2">
      <img
        className="card-img-top imageb"
        // src={defaultImage.src}
        src={validImageUrl || defaultImage.src}
        alt={title}
      ></img>
      <div className="card-body">
        <a href={url}>
          {" "}
          <h5 className="card-title">{title}</h5>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
