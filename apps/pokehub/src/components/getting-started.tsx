"use client";
import { Button } from "@pokehub/components";
import { formatDate } from "@pokehub/utils";

export const GettingStarted = () => {
  return (
    <Button
      onClick={() => {
        console.log(formatDate(new Date()));
      }}
    >
      Getting Started
    </Button>
  );
};
