import { useEffect, useState } from "react";

const useItems = (data) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setItems([...items, ...data]);
    }
  }, [data]);

  return [items];
};

export default useItems;
