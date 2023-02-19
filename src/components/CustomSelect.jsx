import React, { useState } from "react";
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
  z-index: ${(props) => (props.showOptions ? "10" : "-1")};;
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
  width: ${props => props.width};
  height: max-content;
  padding: 10px;
  cursor: pointer;
  user-select: none;
  border-radius: ${(props) => (props.showOptions ? "12px 12px 0 0" : "12px")};
`;

const CustomSelect = ({ width, title, options, onChange }) => {
  const [compiledTitle, setCompiledTitle] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleClick = (op) => {
    setShowOptions(false);
    setCompiledTitle(op.title);
    onChange(op.value);
  };

  
  return (
    <StyledCustomSelect showOptions={showOptions} width={width}>
      <div onClick={handleShowOptions}>{compiledTitle ? compiledTitle : title}</div>
      <OptionWrapper showOptions={showOptions} className="options__wrapper">
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
