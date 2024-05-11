import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

/**
 * Represents the main application component.
 * @returns {JSX.Element} The JSX element representing the application.
 */
export default function App() {
    /**
     * State variable to hold the list of items.
     * @type {[Array<Object>, function]} Array containing the list of items and its setter function.
     */
  const [items, setItems] = useState([]);

    /**
     * Handles the addition of a new item to the list.
     * @param {Object} item The item to be added.
     */
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

    /**
     * Handles the deletion of an item from the list.
     * @param {string} id The ID of the item to be deleted.
     */
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

    /**
     * Handles toggling the packed status of an item.
     * @param {string} id The ID of the item to be toggled.
     */
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

    /**
     * Handles clearing the entire list of items.
     */
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
