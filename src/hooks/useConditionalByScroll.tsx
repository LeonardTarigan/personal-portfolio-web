import { useEffect, useState } from "react";

export const useConditionalByScroll = (): boolean => {
  const [showComponent, setShowComponent] = useState<boolean>(false);

  const handleNavbarScroll = (): void => {
    if (window.scrollY >= 500) {
      setShowComponent(true);
    } else {
      setShowComponent(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarScroll);

    return () => {
      removeEventListener("scroll", handleNavbarScroll);
    };
  }, [showComponent]);

  return showComponent;
};
