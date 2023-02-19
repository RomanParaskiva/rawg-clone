import React, { useState, useRef } from "react";
import Link from "next/link";
import client from "@/axios";
import { StyledSearchWrapper, CloseBtn, SearchResultsWrapper } from "@/styles/styles";
import { debounce } from "@/utils/debounce";

const SearchComponent = () => {
  const [showClearBtn, setShowClearBtn] = useState(false);
  const [results, setResults] = useState([]);

  const clearInput = () => {
    inputRef.current.value = "";
    setShowClearBtn(false);
    setResults([])
  };
  const inputRef = useRef();

  const searchRequest = (val) => {
    if (val.length > 0) {
      setShowClearBtn(true);
      client
        .get(`/games`, {
          params: {
            search: val,
          },
        })
        .then(({ data }) => {
          setResults([...data.results]);
          console.log(data);
        });
    } else {
      setShowClearBtn(false);
    }
  };
  const debouncedHandle = debounce(searchRequest, 500);

  return (
    <>
      <StyledSearchWrapper>
        <input
          ref={inputRef}
          onChange={(e) => {
            e.persist();
            debouncedHandle(e.target.value);
          }}
          type="text"
          placeholder="Search "
        />
        <CloseBtn show={showClearBtn} onClick={clearInput}></CloseBtn>
      </StyledSearchWrapper>
      <SearchResultsWrapper show={!!(results.length > 0)}>
        {results.map((item) => (
          <Link href={`/games/${item.slug}`} onClick={() => setResults([])}>
            <div key={item.id}>
              <img width="50" height="50" src={item.background_image} alt={item.name} /> {item.name}
            </div>
          </Link>
        ))}
      </SearchResultsWrapper>
    </>
  );
};

export default SearchComponent;
