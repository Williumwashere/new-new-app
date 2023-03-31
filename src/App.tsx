import { CircularProgress, Container, Stack } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Search, { SearchProps } from "./atoms/Search";
import CardList from "./organisms/CardList";
import { Exercise } from "./types/types";

export default function App() {
  const [search, setSearch] = useState<string>("");

  const { data, isLoading } = useQuery(["exercises", search], query, {
    enabled: Boolean(search),
  });

  const query = async () =>
    axios.get<Exercise[]>(
      `https://api.api-ninjas.com/v1/caloriesburned?activity=${search}`,
      {
        headers: { "X-API-KEY": "lZOkNRcxcRbTIitJ2BjLKw==7ukbxScp64NxhMke" },
      }
    );

  const handleChange: SearchProps["onChange"] = (event) => {
    setSearch(event.target.value);
    console.log(event);
  };

  return (
    <Container>
      <Stack spacing={2} alignItems="center">
        <Search search={search} onChange={handleChange} />
        {isLoading ? (
          <CircularProgress size={35} />
        ) : (
          <CardList exercises={data?.data || []} />
        )}
      </Stack>
    </Container>
  );
}
