import React, { useState, useRef } from "react";
import styled from "styled-components";

const OptionWrapper = styled.div`
  position: absolute;
  left:0;
  right:0;
  top:100%;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: rgb(55 55 57);
  height: ${(props) => (props.showOptions ? "max-content" : 0)};
  opacity: ${(props) => (props.showOptions ? "1" : 0)};
  z-index: 10;
  padding: 10px;
  transition: all 0.3s ease;

  & .custom-select__option {
    padding: 5px;
    color: #fff;
    cursor: pointer;
    letter-spaicing: 0.03em;\
    user-select: none;

    &:hover {
        color: #c0baba;
    }
  }
`;

const StyledCustomSelect = styled.div`
  position: relative;
  background-color: rgb(124 124 129 / 30%);
  width: 220px;
  padding: 10px;
  cursor: pointer;
  user-select: none;
  border-radius: ${(props) => (props.showOptions ? "12px 12px 0 0" : "12px")};
`;

const CustomSelect = ({ title, options, onChange }) => {
  const [compiledTitle, setCompiledTitle] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleClick = (op) => {
    setShowOptions(false);
    setCompiledTitle(`${title} ${op.title}`);
    onChange(op.value);
  };

  const optionWrapperRef = useRef();
  return (
    <StyledCustomSelect showOptions={showOptions}>
      <div onClick={handleShowOptions}>{compiledTitle ? compiledTitle : title}</div>
      <OptionWrapper showOptions={showOptions} ref={optionWrapperRef} className="options__wrapper">
        {options.map((op, idx) => (
          <div onClick={() => handleClick(op)} className="custom-select__option" key={op.title + idx}>
            {op.title}
          </div>
        ))}
      </OptionWrapper>
    </StyledCustomSelect>
  );
};

export default CustomSelect;
