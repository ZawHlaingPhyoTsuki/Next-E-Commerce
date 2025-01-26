import { GETUsers } from "@/app/api/route";
import React from "react";

export default async function page() {
  const users = await GETUsers();

  return (
    <div>
      Contact Page{" "}
      {users.map((user) => (
        <p key={user.id}>
          {user.name} and {user.email}
        </p>
      ))}
    </div>
  );
}
