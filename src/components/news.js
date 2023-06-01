import React, { Component, useState, useEffect } from "react";
import NewsItem from "./newsitem";
import Spinner from "./spinner";

import InfiniteScroll from "react-infinite-scroll-component";


const placeholder_img = "https://nbhc.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF"
export default function News(props) {
  let query = props.query;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchData = async () => {
    props.setProgress(0);

    console.log(props.query)
    let url = `https://newsapi.org/v2/top-headlines?country=in&page=${page}&pageSize=${props.pageSize}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}`;
    if(query!==""){
      url =`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&page=${page}&pageSize=${props.pageSize}&apiKey=${process.env.REACT_APP_API_KEY}`
    }
    
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);

    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
    // window.history.pushState(null, null, `?page=${page}`);
  };

  useEffect(() => {
    fetchData();
    // setPage(page + 1);
  }, []);

  const handleNextClick = async () => {
    setPage(page + 1);
    await fetchData();
    window.scrollTo(0, 0);
  };

  const handlePrevClick = async () => {
    if (page > 1) {
      setPage(page - 1);
      await fetchData();
    }

    window.scrollTo(0, 0);
  };

  const fetchMoreData = async () => {
    // setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=in&page=${page+1}&pageSize=${props.pageSize}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}`;
    
    if(query!==""){
      url =`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&page=${page+1}&pageSize=${props.pageSize}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}`
    }
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };

  function format_date(date) {
    return new Date(date).toDateString();
  }

  return (
    <>
      <div className="container my-3">
        <h1>News app- Top {props.category} Headlines</h1>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner></Spinner>}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-lg-4 col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage ? element.urlToImage : placeholder_img}
                      newsUrl={element.url ? element.url : element.url}
                      sourceName={
                        element.source.name
                          ? element.source.name
                          : element.source.name
                      }
                      authorName={element.author ? element.author : "unknown"}
                      date={
                        element.publishedAt
                          ? format_date(element.publishedAt)
                          : ""
                      }
                    ></NewsItem>
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

//         {/* <div className="container d-flex justify-content-between my-2">
//           <button
//             type="button"
//             disabled={page <= 1}
//             onClick={handlePrevClick}
//             className="btn btn-dark"
//           >
//             &larr; Prev
//           </button>
//           <button
//             type="button"
//             disabled={
//               page >=
//               Math.ceil(totalResults / props.pageSize)
//             }
//             onClick={handleNextClick}
//             className="btn btn-dark"
//           >
//             Next &rarr;
//           </button>
//         </div> */}
//       </>
//     );
//   }
// }
