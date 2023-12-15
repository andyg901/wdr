import React, { useEffect, useState } from "react";

export const GameIntro = ({ game, theme }) => {
  const [intro, setIntro] = useState("");

  useEffect(() => {
    let text = "";
    switch (game) {
      case "unpopular":
        text = "Do you agree that... ?";
        break;
      default:
        break;
    }

    setIntro(text);
  }, [game]);

  return (
    <p className="font-sans text-xl mt-20 px-46 text-center">
      <span className={`${theme.headerBackgroundColor} ${intro?.length === 0 ? '' :  'p-2'}`}>{intro}</span>
    </p>
  );
};
