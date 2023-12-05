import React, { useEffect, useState } from 'react'

export const GameIntro = ({ game }) => {
    const [intro, setIntro] = useState('');

    useEffect(() => {
        let text = '';
        switch (game) {
            case 'unpopular':
                text = 'Do you agree that... ?'
                break;
            default:
                break;
        }

        setIntro(text);
    }, [game]);

    return (
        <p className='font-sans text-xl mt-10 px-46 text-center'>{intro}</p>
    )
}
