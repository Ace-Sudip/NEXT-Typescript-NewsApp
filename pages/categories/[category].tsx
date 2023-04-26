import { NewsArticle, NewsResponse } from "./../../models/NewsArticle";
import { GetStaticPaths, GetStaticProps } from "next";
import NewsArticlesGrid from "../../components/NewsCardCollection";

interface CategoryPageProps {
  newsArticles: NewsArticle[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categorySlugs = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const paths = categorySlugs.map((slugs) => ({ params: { category: slugs } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CategoryPageProps> = async ({
  params,
}) => {
  const category = params?.category?.toString();
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=gb&category=${category}&apiKey=${process.env.API_KEY}`
  );
  const newsResponse: NewsResponse = await response.json();
  return {
    props: { newsArticles: newsResponse.articles },
    revalidate: 2 * 60,
  };
};

const CategoryPage = ({ newsArticles }: CategoryPageProps) => {
  return (
    <div>
      <NewsArticlesGrid articles={newsArticles} />
    </div>
  );
};
export default CategoryPage;
