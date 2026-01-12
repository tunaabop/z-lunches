import { FaTrash, FaCopy } from "react-icons/fa";

export default function OrderList({ orders, onDelete, onCopy }) {
  return (
    <ul style={{ paddingLeft: "1.2rem" }}>
      {orders.map((order, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.4rem",
          }}
        >
          <span>{order}</span>
          <div>
            <button
              onClick={() => onCopy(order)}
              style={{ marginRight: "0.5rem" }}
              title="Copy order"
            >
              <FaCopy />
            </button>
            <button onClick={() => onDelete(index)} title="Delete order">
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
