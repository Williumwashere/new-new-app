import { styled, TextField, TextFieldProps } from "@mui/material";
import React from "react";

const SearchBar = styled(TextField)`
  border-radius: 10%;
`;

export interface SearchProps {
  search: string;
  onChange: TextFieldProps["onChange"];
}

export default function Search({ search, onChange }: SearchProps) {
  return (
    <SearchBar
      id="search-bar"
      value={search}
      onChange={onChange}
      label="Search Here"
      variant="standard"
    />
  );
}
