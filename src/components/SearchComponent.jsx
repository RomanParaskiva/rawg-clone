import React, { useState, useEffect } from "react";
import client from "@/axios";
import { StyledSearchWrapper, CloseBtn } from "@/styles/styles"
import { debounce } from "@/utils/debounce";



const SearchComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const clearInput = () => {
    setInputValue("");
  };

  const searchRequest = async () => {
    const {data} = await client.get(`/games`, {
        params: {
            searh: inputValue
        }
    })

    console.log(data);
  }

  useEffect(() => {
    console.log(inputValue);
    debounce(searchRequest, 500)
  }, [inputValue])
  return (
    <StyledSearchWrapper>
      <input onChange={({ target }) => setInputValue(target.value)} type="text" placeholder="Search " value={inputValue} />
      <CloseBtn show={!!(inputValue.length > 0)} onClick={clearInput}></CloseBtn>
    </StyledSearchWrapper>
  );
};

export default SearchComponent;
