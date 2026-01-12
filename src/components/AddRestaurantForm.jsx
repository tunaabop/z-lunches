import { useState } from "react";

export default function AddRestaurantForm({ addRestaurant }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addRestaurant(name.trim());
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Add a restaurant..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
