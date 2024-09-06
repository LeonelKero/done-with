import { useEffect, useState } from "react";
import Author from "../api/model/Author";

const useAuthors = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    // Call api service
  }, []);

  // Return an aobject to be consumed
};

export default useAuthors;
