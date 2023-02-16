import { Card as MuiCard, CardContent, Typography } from "@mui/material";
import React from "react";
import { Exercise } from "../types/types";

interface CardProps {
  exercise: Exercise;
}

//expand laterr with calculator
export default function Card({
  exercise: { name, calories_per_hour },
}: CardProps) {
  return (
    <MuiCard sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{calories_per_hour}</Typography>
      </CardContent>
    </MuiCard>
  );
}
