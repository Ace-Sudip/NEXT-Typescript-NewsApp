import { GetServerSideProps } from "next";
import Head from "next/head";
import { NewsArticle, NewsResponse } from "../models/NewsArticle";
import NewsArticlesGrid from "../components/NewsCardCollection";

interface NewsProps {
  newsArticles: NewsArticle[];
}

export const getServerSideProps: GetServerSideProps<NewsProps> = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=au&apiKey=" +
      process.env.API_KEY
  );
  const newsResponse: NewsResponse = await response.json();
  return {
    props: { newsArticles: newsResponse.articles },
  };
};

export default function Homepage({ newsArticles }: NewsProps) {
  return (
    <>
      <Head>
        <title>Breaking News Today </title>
      </Head>
      <NewsArticlesGrid articles={newsArticles} />
    </>
  );
}
