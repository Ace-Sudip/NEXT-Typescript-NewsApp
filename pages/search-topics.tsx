import { FormEvent, useState } from "react";
import { NewsArticle } from "../models/NewsArticle";
import NewsArticlesGrid from "../components/NewsCardCollection";

const SearchNewsPage = () => {
  const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("searchQuery")?.toString().trim();

    if (searchQuery) {
      try {
        setSearchResults(null);
        setError(false);
        setLoading(true);
        const response = await fetch("/api/search-news?q=" + searchQuery);
        const articles: NewsArticle[] = await response.json();
        setSearchResults(articles);
        console.log(articles);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center mt-4"
      >
        <input
          name="searchQuery"
          className="form-control"
          type="text"
          placeholder="Enter keyword"
        />
        <button
          type="submit"
          className=" ml-2 btn btn-primary"
          disabled={loading}
        >
          Search
        </button>
      </form>
      <div className="d-flex flex-column  align-items-center">
        {loading && <span className="sr-only">Loading...</span>}
        {error && <p> Something went wrong...</p>}
        {searchResults?.length === 0 && <p>Results not found</p>}
        {searchResults && <NewsArticlesGrid articles={searchResults} />}
      </div>
    </div>
  );
};

export default SearchNewsPage;
