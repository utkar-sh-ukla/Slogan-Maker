import arrow from "../../../assets/icons/arrow.svg";
import "./pagination.css";

export const Pagination = ({
  pagination,
  slogan,
  postPerPage,
  currentPage,
  nextPage,
  handleNextbtn,
  handlePrevbtn,
  minPageNumberLimit,
  maxPageNumberLimit,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(slogan.length / postPerPage); i++) {
    pageNumber.push(i);
  }

  let pageIncrementBtn = null;
  if (pageNumber.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <button onClick={handleNextbtn} className="dots">
        ...
      </button>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <button onClick={handlePrevbtn} className="dots">
        ...
      </button>
    );
  }

  return (
    <>
      <div className="flex pagination">
        <div className=""></div>
        <div className="flex justify-center gap-15">
          {pageDecrementBtn}
          {pageNumber.map((pageNumber) => {
            if (
              pageNumber < maxPageNumberLimit + 1 &&
              pageNumber > minPageNumberLimit
            ) {
              return (
                <button
                  className={
                    currentPage === pageNumber
                      ? "btn__pagination--active"
                      : "btn__pagination"
                  }
                  onClick={() => pagination(pageNumber)}
                >
                  <span>{pageNumber}</span>
                </button>
              );
            } else {
              return null;
            }
          })}
          {pageIncrementBtn}
        </div>
        <div className="flex">
          <button className="btn__pagination" onClick={nextPage}>
            Next <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </>
  );
};
