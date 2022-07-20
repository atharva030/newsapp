import React, { Component } from "react";
import NewsItems from "./NewsItems";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  document.title = `${capitalizeFirstLetter(
      props.category
    )}- AbTak`;
    
  const updateNews = async () => {
    // const url = `https://newsapi.org/v2/top-headlines?country=&category=${props.category}&apiKey=36c5070cdf664df2adea6888717a5461&page=${page}&pageSize=${props.pageSize}`;
  const url=`https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${props.country}.json`
    setLoader(true); //Extras
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoader(false);
  };
  useEffect(() => {
    updateNews();
  }, []);
  // useeffect will act as a componentDidMount

  const handlePrevClick = async () => {
    setPage(page - 1);
    updateNews();
  };
  const handleNextClick = async () => {
    setPage(page + 1);
    updateNews();
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=36c5070cdf664df2adea6888717a5461&page=${page}&pageSize=${props.pageSize}`;
    setLoader(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoader(false);
  };

  return (
    <>
      <h2 className="text-center" style={{marginTop: "5rem"}}>AbTak- Top {props.heading} Headlines</h2>
      {loader && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loader && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div className="col-4 my-4" key={index}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 28) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
  title: "No title",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
};
export default News;
