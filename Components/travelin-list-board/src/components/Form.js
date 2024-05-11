import { useState } from "react";

/**
 * Form component for adding items.
 * @param {Object} props - Component props.
 * @param {Function} props.onAddItems - Function to handle adding items.
 * @returns {JSX.Element} Form component JSX.
 */
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

    /**
     * Handles form submission.
     * @param {Event} e - The submit event.
     */
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
      <form className="add-form" onSubmit={handleSubmit}>
          <div className="form-header">
              <h3>What do you need for your trip?</h3>
          </div>
          <div className="form-inputs">
              <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
              >
                  {Array.from({length: 20}, (_, i) => i + 1).map((num) => (
                      <option value={num} key={num}>
                          {num}
                      </option>
                  ))}
              </select>
              <input
                  type="text"
                  placeholder="Item..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
              />
          </div>
          <button>Add</button>
      </form>
  );
}
