import { useState } from 'react';

const useInfiniteLoading = (() => {
  const [items, setItems] = useState([]);

  return {
    items
  };
}