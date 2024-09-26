import { CardList } from "@/features/card";
import React from "react";

export default function Home() {
  return (
    <div className="py-5 w-[90%] sm:w-[80%] md:w-[75%]">
      <CardList />
    </div>
  );
}