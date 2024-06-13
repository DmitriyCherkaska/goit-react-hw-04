const LoadMoreBtn = ({ onLoadMore, hasMoreImages }) => {
  return (
    <>
      {hasMoreImages && (
        <button onClick={onLoadMore} className="load-more-btn">
          Load more
        </button>
      )}
    </>
  );
};

export default LoadMoreBtn;
