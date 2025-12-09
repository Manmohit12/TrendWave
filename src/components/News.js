import React, { useEffect, useState, useCallback } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
// import { useFormState } from 'react-dom'; // Remove this line as it's not used

const News = ( props ) => {
  const [ articles, setArticles ] = useState( [] );
  const [ loading, setLoading ] = useState( true );
  const [ page, setPage ] = useState( 1 );
  const [ totalResults, setTotalResults ] = useState( 0 );
  const [ hasMore, setHasMore ] = useState( true );

  const capitalconvert = ( string ) => {
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
  };

  const fetchMoreData = useCallback( async () => {
    const { country, category, pageSize } = props;

    props.setProgress( 10 );
    let url = `https://newsapi.org/v2/top-headlines?country=${ country }&category=${ category }&apiKey=2291f288214a436f93bd1debfd539a18&page=${ page }&pageSize=${ pageSize }`;
    let data = await fetch( url );
    props.setProgress( 30 );
    let parsedData = await data.json();
    props.setProgress( 50 );
    let newArticlesCount = 0;
    if ( parsedData.articles && Array.isArray( parsedData.articles ) ) {
      setArticles( prev => {
        const newArticles = parsedData.articles.filter( article => !prev.some( existing => existing.url === article.url ) );
        newArticlesCount = newArticles.length;
        return [ ...prev, ...newArticles ];
      } );
      setHasMore( newArticlesCount > 0 );
    } else {
      console.error( 'Invalid articles data:', parsedData );
      setHasMore( false );
    }
    if ( page === 1 ) {
      setTotalResults( parsedData.totalResults || 0 );
      setLoading( false );
    }
    props.setProgress( 100 );
    setPage( prev => prev + 1 );
  }, [ props.country, props.category, props.pageSize, props.setProgress ] );

  useEffect( () => {
    document.title = `${ capitalconvert( props.category ) }-TrendWave`;
    setArticles( [] );
    setPage( 1 );
    setTotalResults( 0 );
    setHasMore( true );
    setLoading( true );
    fetchMoreData();
  }, [ props.category, fetchMoreData ] );

  const getBadgeClass = ( category ) => {
    switch ( category ) {
      case 'business':
        return 'bg-success'; // Green
      case 'entertainment':
        return 'bg-primary'; // Blue
      case 'health':
        return 'bg-warning'; // Yellow
      case 'science':
        return 'bg-info'; // Light Blue
      case 'sports':
        return 'bg-secondary'; // Grey
      case 'technology':
        return 'bg-dark'; // Dark
      default:
        return 'bg-danger'; // Red for general or unknown category
    }
  };

  return (
    <div className='container my-3'>
      <h1 style={{ marginTop: '90px' }}>TrendWave - Top headlines on {capitalconvert( props.category )}</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map( ( element ) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice( 0, 45 ) : ""}
                    imageUrl={element.urlToImage}
                    description={element.description ? element.description.slice( 0, 88 ) : ""}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    category={getBadgeClass( props.category )}
                  />
                </div>
              );
            } )}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: 'us',
  pageSize: 6,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
