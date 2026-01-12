import { useState, useEffect } from "react";
import RestaurantCard from "./components/RestaurantCard";
import AddRestaurantForm from "./components/AddRestaurantForm";
import "./styles/theme.css";

function App() {
  // Load restaurants from LocalStorage or start empty
  const [restaurants, setRestaurants] = useState(
    JSON.parse(localStorage.getItem("restaurants")) || []
  );

  // Save restaurants to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem("restaurants", JSON.stringify(restaurants));
  }, [restaurants]);

  // Add a new restaurant
  const addRestaurant = (name) => {
    setRestaurants([...restaurants, { name, orders: [] }]);
  };

  // Update orders for a specific restaurant
  const updateRestaurantOrders = (index, orders) => {
    const updated = [...restaurants];
    updated[index].orders = orders;
    setRestaurants(updated);
  };

  return (
    <div className="app-container">
      <h1>✶ Lunch Ideas ✶</h1>

      {/* Form to add a new restaurant */}
      <AddRestaurantForm addRestaurant={addRestaurant} />

      {/* Render each restaurant */}
      <div className="restaurant-list">
        {restaurants.map((restaurant, i) => (
          <RestaurantCard
            key={i}
            restaurant={restaurant}
            updateOrders={(orders) => updateRestaurantOrders(i, orders)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
