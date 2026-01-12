// Manages individual restaurant cards and their orders

import { useState } from "react";
import OrderList from "./OrderList";

export default function RestaurantCard({ restaurant, updateOrders }) {
  const [orders, setOrders] = useState(restaurant.orders || []);
  const [newOrder, setNewOrder] = useState("");

  // Add new order
  const handleAddOrder = () => {
    if (!newOrder.trim()) return;
    const updatedOrders = [...orders, newOrder.trim()];
    setOrders(updatedOrders);
    updateOrders(updatedOrders);
    setNewOrder("");
  };

  // Delete a specific order
  const handleDeleteOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
    updateOrders(updatedOrders);
  };

  // Copy a single order with a bullet
  const handleCopyOrder = (order) => {
    navigator.clipboard.writeText(`- ${order}`);
    alert(`Copied: "- ${order}"`);
  };

  // Copy all orders as a bulleted list
  const handleCopyAllOrders = () => {
    if (orders.length === 0) return;
    const bulletList = orders.map((order) => `- ${order}`).join("\n");
    navigator.clipboard.writeText(bulletList);
    alert("Copied all orders!");
  };

  return (
    <div className="restaurant-card">
      <h2>{restaurant.name}</h2>

      {/* Order List */}
      <OrderList
        orders={orders}
        onDelete={handleDeleteOrder}
        onCopy={handleCopyOrder}
      />

      {/* Add New Order */}
      <div className="input-row">
        <input
          type="text"
          placeholder="Add new order..."
          value={newOrder}
          onChange={(e) => setNewOrder(e.target.value)}
        />
        <button onClick={handleAddOrder} className="glossy-btn">
          Add
        </button>
      </div>

      {/* Copy All Orders Button */}
      {orders.length > 0 && (
        <button onClick={handleCopyAllOrders} className="glossy-btn copy-all">
          Copy All Orders
        </button>
      )}
    </div>
  );
}
