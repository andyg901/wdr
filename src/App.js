import { useCallback, useEffect, useState } from "react";
import questions from "./questions/random.json";
import topics from "./questions/topics.json";
import unpopular from "./questions/unpopular.json";
import { getTheme } from "./themes";
import { ThemeSelector } from "./components/ThemeSelector";
import { GameIntro } from "./components/GameIntro";
import { Controls } from "./components/Controls";
import cursed_cat from "./images/cursed_cat.jpg";
import cat_keyboard from "./images/cat_keyboard.gif";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function App() {
  const [theme, setTheme] = useState(getTheme("emerald"));
  const [gameTexts, setGameTexts] = useState([]);
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [cat, setCat] = useState(cursed_cat);
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name");
  const game = urlParams.get("game");

  useEffect(() => {
    let texts = null;
    switch (game) {
      case "underrated":
        texts = topics;
        break;
      case "unpopular":
        texts = unpopular;
        break;
      default:
        texts = questions;
        break;
    }

    setGameTexts(texts);
    setAskedQuestions([...askedQuestions, getRandomInt(0, texts.length)]);
  }, []);

  const onNextClick = useCallback(() => {
    let nextQuestion = getRandomInt(0, gameTexts.length);
    do {
      nextQuestion = getRandomInt(0, gameTexts.length);
    } while (
      askedQuestions.indexOf(nextQuestion) > -1 ||
      askedQuestions.length === gameTexts.length
    );

    setAskedQuestions([...askedQuestions, nextQuestion]);
  }, [askedQuestions]);

  return (
    <div className={`${theme.bodyBackgroundColor} flex flex-col h-screen`}>
      <div className={`${theme.headerBackgroundColor} px-2 py-5 text-center`}>
        <span className={`${theme.textColor} text-3xl`}>
          Talking and chill with... <i className="text-4xl">{name ?? "Me"}</i>
        </span>
      </div>
      <div className="flex flex-col grow pt-52">
        <GameIntro game={game} />
        <p className="font-serif text-4xl italic px-46 pt-6 pb-16 text-center">
          {gameTexts[askedQuestions[askedQuestions.length - 1]]}
        </p>

        <Controls
          game={game}
          finished={askedQuestions.length === gameTexts.length}
          onNextClick={onNextClick}
          theme={theme}
        />

        <div className="grow w-1 h-full"></div>
        <div className="inline-flex justify-end pr-16 pb-16">
          <ThemeSelector
            value={theme.themeName}
            onChange={(theme) => setTheme(getTheme(theme))}
          />
        </div>
      </div>
      <img
        src={cat}
        onMouseEnter={() => setCat(cat_keyboard)}
        onMouseLeave={() => setCat(cursed_cat)}
        alt="Cursed Cat"
        style={{
          position: "absolute",
          bottom: "5px",
          left: "5px",
          width: "auto",
          height: "100px",
        }}
      />
    </div>
  );
}

export default App;
