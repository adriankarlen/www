import Menu from "../islands/Menu.tsx";
import { useEffect, useState } from "preact/hooks";

const FloatingBox = () => {
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowBox(true);
      } else {
        setShowBox(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      class={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 ${
        showBox
          ? "transition-all duration-500 delay-150 opacity-100 translate-y-0 pointer-events-auto"
          : "hidden opacity-0 translate-y-[20%] md:block bottom-0 left-0 transition-all duration-500 delay-150 pointer-events-none"
      }`}
    >
      <div class="bg-[#dce0e8] dark:bg-[#11111b] shadow-lg rounded-full p-4 flex justify-center">
        <Menu
          email="mailto:akarlen@pm.me"
          github="https://github.com/adriankarlen"
          linkedin="https://www.linkedin.com/in/adrian-karlen/"
        />
      </div>
    </div>
  );
};

export default FloatingBox;
