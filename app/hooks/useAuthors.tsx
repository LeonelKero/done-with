import { useEffect, useState } from "react";
import Author from "../api/model/Author";
import { getAllAuthors } from "../api/services/authorService";

const useAuthors = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    getAllAuthors().then((res) => {
      if (res.ok) setAuthors(res?.data);
    });
    // Handle failed option
  }, []);

  return { authors, setAuthors };
};

export default useAuthors;
