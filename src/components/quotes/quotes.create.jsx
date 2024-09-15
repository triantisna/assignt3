"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const QuotesCreate = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [quotes, setQuotes] = useState("");

  async function handleCreateQuotes() {
    await fetch("https://v1.appbackend.io/v1/rows/dOrJwP4RwXk8", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ name, quotes }]),
    });
    router.refresh();
  }

  return (
    <div className="text-center space-y-4">
      <h1 className="text-slate-300 font-bold text-5xl p-2">
        Make your QUOTES!!
      </h1>
      <div>
        <input placeholder="name" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <textarea
          placeholder="quotes"
          onChange={(e) => setQuotes(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button onClick={handleCreateQuotes} className="btn-primary">
          Save
        </button>
      </div>
      <hr className="p-4"></hr>
    </div>
  );
};
