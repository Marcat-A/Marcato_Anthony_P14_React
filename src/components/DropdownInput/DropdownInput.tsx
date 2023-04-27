import React, { useState } from "react";
import styled from "styled-components";

class DropdownInputProps {
  name: string;
  data: string[];
  defaultText?: string;
  color?: string;
  borderColor?: string;
  borderRadius?: string;
  scrollBarBackgroundColor?: string;
  scrollBarThumbColor?: string;
  scrollBarWidth?: string;
  scrollBarRadius?: string;
  selectBoxColor?: string;
  selectBoxOptionsColor?: string;
  labelled?: boolean;
}

const Select = styled.select<DropdownInputProps>`
  width: 100%;
  padding: 10px;
  border: ${(props) =>
    props.borderColor
      ? `1px solid ${props.borderColor}`
      : "1px solid rgba(0,0,0,0.25)"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "5px"};
  outline: none;
  color: ${(props) => (props.color ? props.color : "rgba(0,0,0,0.25)")};
  font-size: 1em;
  ::-webkit-scrollbar {
    width: ${(props) => (props.scrollBarWidth ? props.scrollBarWidth : "8px")};
  }
  option {
    color: ${(props) =>
      props.selectBoxOptionsColor
        ? props.selectBoxOptionsColor
        : "rgba(0,0,0,0.25)"};
    background-color: ${(props) =>
      props.selectBoxColor ? props.selectBoxColor : "#ffffff"};
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) =>
      props.scrollBarBackgroundColor
        ? props.scrollBarBackgroundColor
        : "rgba(0,0,0,0.25)"};
    border-radius: ${(props) =>
      props.scrollBarRadius ? props.scrollBarRadius : "10px"};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      props.scrollBarThumbColor
        ? props.scrollBarThumbColor
        : "rgba(0,0,0,0.5)"};
    border-radius: ${(props) =>
      props.scrollBarRadius ? props.scrollBarRadius : "10px"};
  }
`;

const DropdownInput: React.FC<DropdownInputProps> = ({
  name,
  data,
  defaultText,
  color,
  borderColor,
  borderRadius,
  scrollBarBackgroundColor,
  scrollBarThumbColor,
  scrollBarWidth,
  scrollBarRadius,
  selectBoxColor,
  selectBoxOptionsColor,
  labelled,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === (e.target.children[0] as HTMLSelectElement).value) {
      setSelectedOption(null);
    } else {
      setSelectedOption(e.target.value);
    }
  }

  return (
    <>
      {labelled ? <label htmlFor="selector">{name}</label> : ""}
      <Select
        data={data}
        name={name}
        color={!selectedOption ? "rgba(0,0,0,0.25)" : color}
        borderColor={borderColor}
        scrollBarBackgroundColor={scrollBarBackgroundColor}
        scrollBarThumbColor={scrollBarThumbColor}
        borderRadius={borderRadius}
        scrollBarWidth={scrollBarWidth}
        scrollBarRadius={scrollBarRadius}
        selectBoxColor={selectBoxColor}
        selectBoxOptionsColor={selectBoxOptionsColor}
        onChange={handleChange}
        value={selectedOption || ""}
      >
        <option>
          {defaultText ? defaultText : "-- Please select an option --"}
        </option>
        {data.map((d, i) => {
          return (
            <option value={d} key={i}>
              {d}
            </option>
          );
        })}
      </Select>
    </>
  );
};

export default DropdownInput;
