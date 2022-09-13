import { useContext } from "react";

import PageOffsetContext from "../context/PageOffsetProvider";

const usePageOffset = () => {
  const { offsetY, setOffsetY } = useContext(PageOffsetContext);

  return {
    offsetY,
    setOffsetY,
  };
};

export default usePageOffset;
