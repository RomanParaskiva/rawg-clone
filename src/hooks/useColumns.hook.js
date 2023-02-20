import { useEffect, useState } from "react";

export const useColumns = () => {
  const [columns, setColumns] = useState(4);
  useEffect(() => {
    const handleResize = () => {
      if (screen.width >= 1440) setColumns(4);
      if (screen.width >= 1150 && screen.width < 1440) setColumns(3);
      if (screen.width >= 800 && screen.width < 1150) setColumns(2);
      if (screen.width < 800) setColumns(1);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {columns}
};
