import "./main.css";
import cross from "../../assets/icons/cross.svg";
import slogans from "../../data/sloganData.json";
import { useState } from "react";
import { Slogans } from "./Solgan/Slogan";
import { Pagination } from "./Pagination/Pagination";

export const Main = () => {
  const [input, setInput] = useState("cozy");
  const [finalInput, setFinalInput] = useState(input);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const closeHandler = () => {
    setInput("");
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const generateSolgon = () => {
    setFinalInput(input);
  };

  const filterSolgon = slogans.filter(
    (element) => element.sloganKey === finalInput
  );

  const postPerPage = 18;
  const pageNumberLimit = 3;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = filterSolgon.slice(indexOfFirstPost, indexOfLastPost);
  const totalPage = Math.ceil(filterSolgon.length / postPerPage) + 1;

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);
    console.log(currentPage);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const nextPage = () => {
    if (currentPage + 1 < totalPage) {
      handleNextbtn();
    }
  };

  return (
    <>
      <section className="main__header"></section>
      <main className="main__conatiner">
        <div className="main__wrapper">
          <div className="main__content">
            <h1 className="heading mb-16">Free slogan maker</h1>
            <p className="sub-heading mb-48">
              Simply enter a term that describes your business, and get up to
              1,000 relevant slogans for free.
            </p>
            <div className="main__input__conatiner mb-48">
              <label htmlFor="" className="input-label mb-8">
                Word for your slogan
              </label>
              <div className="input">
                <input
                  className="main__input"
                  value={input}
                  onChange={(e) => inputHandler(e)}
                />
                {input && (
                  <button onClick={closeHandler}>
                    <img src={cross} alt="cross" className="input-cross" />
                  </button>
                )}
              </div>
            </div>
            <button className="btn btn--primary mb-48" onClick={generateSolgon}>
              <span>Generate slogans</span>
            </button>

            <div className="divide-y-1 mb-52"></div>

            <div className="flex items-center justify-between mb-32">
              <p className="slogans__result__heading ">
                We have generated {filterSolgon.length} slogans for "
                {finalInput}"
              </p>
              <button className="btn btn--outline">Download all</button>
            </div>

            <Slogans slogan={currentPosts} />

            <div className="divide-y-1 mb-24"></div>

            <Pagination
              pagination={pagination}
              slogan={filterSolgon}
              postPerPage={postPerPage}
              currentPage={currentPage}
              nextPage={nextPage}
              handlePrevbtn={handlePrevbtn}
              handleNextbtn={handleNextbtn}
              minPageNumberLimit={minPageNumberLimit}
              maxPageNumberLimit={maxPageNumberLimit}
            />
          </div>
        </div>
      </main>
    </>
  );
};
