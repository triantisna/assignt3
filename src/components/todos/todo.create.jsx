"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const TodoCreate = () => {
  const router = useRouter();

  const [tittle, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleCreateTodo() {
    await fetch("https://v1.appbackend.io/v1/rows/Ci3SLVTX72BU", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ tittle, content }]),
    });
    router.refresh();
  }

  return (
    <div>
      <input onChange={(e) => setTitle(e.target.value)} />
      <textarea onChange={(e) => setContent(e.target.value)}></textarea>
      <button onClick={handleCreateTodo} className="btn-primary">
        Save
      </button>
    </div>
  );
};
