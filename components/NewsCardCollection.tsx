import { NewsArticle } from "../models/NewsArticle";
import NewsArticleEntry from "./NewsCard";

interface NewsArticlesGridProps {
  articles: NewsArticle[];
}

const NewsCardCollection = ({ articles }: NewsArticlesGridProps) => {
  return (
    <div className="row">
      {articles.map((article) => (
        <div className="col-12 mb-2 col-md-6" key={article.url}>
          <NewsArticleEntry article={article} />
        </div>
      ))}
      <div className="col-12 mb-2 col-md-6"></div>
    </div>
  );
};

export default NewsCardCollection;
