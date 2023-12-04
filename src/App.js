import { useCallback, useEffect, useState } from 'react';
import questions from './questions/random.json';
import topics from './questions/topics.json';
import { getTheme } from './themes';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function App() {
  const [theme, setTheme] = useState(getTheme('red'));
  const [gameTexts, setGameTexts] = useState([]);
  const [askedQuestions, setAskedQuestions] = useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  const game = urlParams.get('game');

  useEffect(() => {
    const texts = game === 'underrated' ? topics : questions;
    setGameTexts(texts);
    setAskedQuestions([...askedQuestions, getRandomInt(0, texts.length)]);
  }, []);

  const onNextClick = useCallback(() => {
    let nextQuestion = getRandomInt(0, gameTexts.length);
    do {
      nextQuestion = getRandomInt(0, gameTexts.length);
    } while (askedQuestions.indexOf(nextQuestion) > -1 || askedQuestions.length === gameTexts.length);

    setAskedQuestions([...askedQuestions, nextQuestion]);
  }, [askedQuestions]);

  return (
    <div className={`${theme.bodyBackgroundColor} flex flex-col h-screen`}>
      <div className={`${theme.headerBackgroundColor} px-2 py-5 text-center`}>
        <span className={`${theme.textColor} text-3xl`}>Talking and gaming <small>(not PC gaming though :&lt;)</small> with... <i className='text-4xl'>{name}</i></span>
      </div>
      <div className='flex flex-col grow'>
        <p className='font-serif text-4xl italic px-46 pt-60 pb-16 text-center'>
          {gameTexts[askedQuestions[askedQuestions.length - 1]]}
        </p>
        <button onClick={onNextClick}
          disabled={askedQuestions.length === gameTexts.length}
          className={`${theme.buttonBackgroundColor} ${theme.buttonTextColor} disabled:opacity-25 font-bold w-max p-6 self-center rounded-md shadow-lg shadow-current hover:shadow-indigo-500/40`}>
          {askedQuestions.length === gameTexts.length ? "There's no more texts ;<" : game === 'underrated' ? 'Give me next topic!' : 'Give me next question!'}
        </button>
        <div className='grow w-1 h-full'></div>
        <div className='inline-flex justify-end pr-16 pb-16'>
          <select onChange={(e) => setTheme(getTheme((e.target.value || '').toLowerCase()))}>
            <option value="gray">Gray theme</option>
            <option value="Zinc">Zinc theme</option>
            <option value="Neutral">Neutral theme</option>
            <option value="Stone">Stone theme</option>
            <option value="Orange">Orange theme</option>
            <option value="Yellow">Yellow theme</option>
            <option value="Lime">Lime theme</option>
            <option value="Green">Green theme</option>
            <option value="Emerald">Emerald theme</option>
            <option value="Teal">Teal theme</option>
            <option value="Cyan">Cyan theme</option>
            <option value="Sky">Sky theme</option>
            <option value="Blue">Blue theme</option>
            <option value="Indigo">Indigo theme</option>
            <option value="Violet">Violet theme</option>
            <option value="Purple">Purple theme</option>
            <option value="Fuchsia">Fuchsia theme</option>
            <option value="Pink">Pink theme</option>
            <option value="Rose">Rose theme</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
