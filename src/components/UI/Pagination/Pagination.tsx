import {FC} from "react";
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {PaginationProps} from "../../../types/pagination";

import './Pagination.scss';

const Pagination: FC<PaginationProps> = ({currentPage, pageSize, movieCount, setCurrentPage, setNextPage, setPrevPage}) => {

  const dispatch = useTypedDispatch();

  let pagesCount = Math.ceil(movieCount / pageSize);
  const pages = [];

  if (pagesCount > 5) {
    if (currentPage > 3) {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pages.push(i);
      }
    } else {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
    }
  } else {
    for (let i = 1; i < pagesCount; i++) {
      pages.push(i)
    }
  }

  return (
    <>
      {
        pages.length ? (
          <section className="pagination">
            <div className="container">
              <div className="pagination__inner">
                <button className="pagination__btn" onClick={() => dispatch(setPrevPage())}>Prev</button>
                {
                  pages.map((page, i) => (
                    <span
                      key={i}
                      className={currentPage === page ? 'pagination__active' : ''}
                      onClick={() => dispatch(setCurrentPage(page))}
                    >{page}</span>
                  ))
                }
                <button className="pagination__btn" onClick={() => dispatch(setNextPage())}>Next</button>
              </div>
            </div>
          </section>
        ) : null
      }
    </>
  );
};

export default Pagination;