import React, { useEffect, useState } from 'react'

export const Controls = ({ game, finished, onNextClick, theme, }) => {
    const [texts, setTexts] = useState({
        next: 'Give me next question!',
        finished: 'That\'s the last one ;&lt;'
    });

    useEffect(() => {
        switch (game) {
            case 'underrated':
                setTexts({
                    ...texts,
                    next: 'Give me next topic!',
                });
                break;
            case 'unpopular':
                setTexts({
                    ...texts,
                    next: 'Bring it on!',
                });
                break;
            default:
                break;
        }
    }, [game]);

    return (
        <button onClick={onNextClick}
            disabled={finished}
            className={`${theme.buttonBackgroundColor} ${theme.buttonTextColor} disabled:opacity-25 font-bold w-max p-6 self-center rounded-md shadow-lg shadow-current hover:shadow-indigo-500/40`}>
            {finished ? texts.finished : texts.next}
        </button>
    )
}
