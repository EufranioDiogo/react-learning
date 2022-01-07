import React, { useEffect } from "react";

function useDocumentTitle(counter) {
  useEffect(() => {
    document.title = `Counter Value ${counter}`;
  }, [counter]);
}

export default useDocumentTitle;
