import { Stack } from "@mui/material";
import React from "react";
import Card from "../atoms/Card";
import { Exercise } from "../types/types";

interface CardListProps {
  exercises: Exercise[];
}

export default function CardList({ exercises }: CardListProps) {
  return (
    <Stack spacing={2}>
      {exercises.map((exercise) => (
        <Card exercise={exercise} />
      ))}
    </Stack>
  );
}
