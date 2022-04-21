import { Typography } from "@material-ui/core";
import React from "react";

export const Review = ({ submit, values }) => {
  return (
    <Typography variant="body1" component="h2">
      <p>Area: {values.area}</p>
      <p>City: {values.city}</p>
      <p>Card Name: {values.cardName}</p>
      <p>Card Number: {values.cardNumber}</p>
      <p>Email: {values.email}</p>
      <p>$total: 20$</p>
      <button onClick={() => submit(1)}>Back</button>
    </Typography>
  );
};
