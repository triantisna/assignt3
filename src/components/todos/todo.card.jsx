"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const TodoCard = ({ id, tittle, content }) => {
  const router = useRouter();

  async function handleDeleteTodo() {
    await fetch("https://v1.appbackend.io/v1/rows/Ci3SLVTX72BU", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ id }]),
    });
    router.refresh();
  }

  return (
    <div className="w-fit border p-4">
      <h3>{tittle}</h3>
      <p>{content}</p>
      <button onClick={handleDeleteTodo} className="btn-danger">
        Delete
      </button>
    </div>
  );
};
