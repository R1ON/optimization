import React, { useState } from 'react';

export function Optimistic() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [pending, setPending] = useState(false);

  const handleAddItem = async () => {
    const newItem = `Item ${items.length + 1}`;

    setItems([...items, newItem]);
    setPending(true);

    try {
      await fetch('https://jsonplaceholder.typicode.com/todos');
    } catch (error) {
      setItems(items);
    } finally {
      setPending(false);
    }
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleAddItem} disabled={pending}>
        {pending ? 'Adding...' : 'Add Item'}
      </button>
    </div>
  );
}
