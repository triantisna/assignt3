"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const QuotesCard = ({ id, name, quotes }) => {
  const router = useRouter();

  async function handleDeleteQuotes() {
    await fetch("https://v1.appbackend.io/v1/rows/dOrJwP4RwXk8", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ id }]),
    });
    router.refresh();
  }

  return (
    <div className="responsive-div border rounded-lg p-4 bg-gray-800">
      <h3 className="font-bold mb-3 text-slate-200">{name}</h3>
      <p className="text-sm text-slate-400 font-medium">{quotes}</p>
      <div className="flex justify-between p-1">
        <p></p>
        <button onClick={handleDeleteQuotes} className="btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};
