"use client";

import { useUserStore } from "@/store/user-store";

export default function User() {
  const { user, update } = useUserStore();

  const handleUpdateUser = () => {
    const user = {
      id: 3,
      name: "OrcDev",
      email: "orc@example.com",
    };
    update(user);
  };

  return (
    <div>


      <h1>Zustand state management </h1>
      <p>User : {JSON.stringify(user)}</p>
      <button
        className="bg-purple-900 text-white font-bold p-3 rounded-sm 
             transform transition duration-300 ease-in-out
             hover:bg-purple-700 
             hover:scale-105 
             hover:shadow-lg"
        onClick={handleUpdateUser}
      >
        update user
      </button>



    </div >
  );
}
