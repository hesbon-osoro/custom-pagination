import {
  PaginationContainer,
  MorePaginationIconContainer,
  Icon,
} from './pagination.styled';
import More from './assets/more.svg';

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  setCurrentPage: (prevPage: number) => void;
}
const Pagination = ({
  currentPage,
  pageCount,
  setCurrentPage,
}: PaginationProps) => {
  const getPageRange = (currentPage: number, pageCount: number) => {
    if (pageCount < 4) {
      return [];
    }
    let pageRange = [1, 2, 3];
    if (currentPage > 1 && currentPage !== pageCount) {
      pageRange.length = 0;
      pageRange.push(currentPage - 1);
      pageRange.push(currentPage);
      pageRange.push(currentPage + 1);
    } else if (currentPage === pageCount) {
      pageRange.length = 0;
      pageRange.push(currentPage - 2);
      pageRange.push(currentPage - 1);
      pageRange.push(currentPage);
    }
    return pageRange;
  };
  const renderPageButtons = () => {
    let result = [];
    for (let i = 1; i <= pageCount; i++) {
      result.push(
        <button
          key={i}
          className={currentPage === i ? `pageCard active` : `pageCard`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return result;
  };
  return (
    <PaginationContainer>
      <button
        className="pageCard"
        onClick={() => {
          if (currentPage > 1) setCurrentPage(currentPage - 1);
        }}
        disabled={currentPage <= 1}
      >{`<`}</button>
      {pageCount < 4 && renderPageButtons()}
      {currentPage >= pageCount - 2 && pageCount > 3 && (
        <>
          <button
            className={currentPage === 1 ? `pageCard active` : `pageCard`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
          <MorePaginationIconContainer
            style={{ height: '36px', width: '36px' }}
          >
            <Icon
              style={{ width: '20px', height: 'auto' }}
              src={More}
              alt="more"
            />
          </MorePaginationIconContainer>
        </>
      )}
      {getPageRange(currentPage, pageCount).map((page: number) => (
        <button
          key={page}
          className={page === currentPage ? `pageCard active` : `pageCard`}
        >
          {page}
        </button>
      ))}
      {currentPage < pageCount - 2 && pageCount > 3 && (
        <>
          <MorePaginationIconContainer
            style={{ height: '36px', width: '36px' }}
          >
            <Icon
              style={{ width: '20px', height: 'auto' }}
              alt="more"
              src={More}
            />
          </MorePaginationIconContainer>
          <button
            className={
              pageCount === currentPage ? `pageCard active` : `pageCard`
            }
            onClick={() => setCurrentPage(pageCount)}
          >
            {pageCount}
          </button>
        </>
      )}
      <button
        className="pageCard"
        onClick={() => {
          if (currentPage < pageCount) setCurrentPage(currentPage + 1);
        }}
        disabled={currentPage === pageCount}
      >
        {`>`}
      </button>
    </PaginationContainer>
  );
};

export default Pagination;
