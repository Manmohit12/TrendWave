import React, { useEffect, useState, useCallback, useRef } from 'react';
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
    const currentPage = pageRef.current;
    let url = `https://newsapi.org/v2/top-headlines?country=${ country }&category=${ category }&apiKey=${ process.env.REACT_APP_NEWS_API_KEY }&page=${ currentPage }&pageSize=${ pageSize }`;
    let data = await fetch( url );
    props.setProgress( 30 );
    let parsedData = await data.json();
    props.setProgress( 50 );
    if ( parsedData.articles && Array.isArray( parsedData.articles ) ) {
      setArticles( prev => {
        const newArticles = parsedData.articles.filter( article => !prev.some( existing => existing.url === article.url ) );
        return [ ...prev, ...newArticles ];
      } );
      const total = parsedData.totalResults || 0;
      setTotalResults( total );
      // If there are more pages after the current one
      setHasMore( currentPage * pageSize < total );
    } else {
      console.error( 'Invalid articles data:', parsedData );
      setHasMore( false );
    }
    if ( currentPage === 1 ) {
      setLoading( false );
    }
    props.setProgress( 100 );
    // advance the ref and state page counter
    pageRef.current = currentPage + 1;
    setPage( prev => prev + 1 );
  }, [ props.country, props.category, props.pageSize, props.setProgress ] );

  const pageRef = useRef( 1 );

  useEffect( () => {
    document.title = `${ capitalconvert( props.category ) }-TrendWave`;
    setArticles( [] );
    setPage( 1 );
    pageRef.current = 1;
    setTotalResults( 0 );
    setHasMore( true );
    setLoading( true );
    fetchMoreData();
    // Only run when category changes (fetchMoreData is stable w.r.t props so it's safe)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ props.category ] );

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
        hasMore={hasMore}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map( ( element ) => {
              return (
                <div className="col-12 col-sm-6 col-md-3 my-2" key={element.url}>
                  <Newsitem
                    title={element.title || ""}
                    imageUrl={element.urlToImage}
                    description={element.description || ""}
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
