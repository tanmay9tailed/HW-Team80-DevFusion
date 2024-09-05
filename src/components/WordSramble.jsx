import React, { useState, useEffect, useRef } from 'react'

const definitions = [
    { "key": "constitution", "value": "The supreme law of the land" },
    { "key": "democracy", "value": "A system of government by the people" },
    { "key": "parliament", "value": "The highest legislative body in a country" },
    { "key": "president", "value": "The head of state and government" },
    { "key": "preamble", "value": "An introductory statement to a constitution" },
    { "key": "amendment", "value": "A change or addition to a constitution" },
    { "key": "article", "value": "A section or clause in a constitution" },
    { "key": "section", "value": "A subdivision of an article in a constitution" },
    { "key": "schedule", "value": "A list or table in a constitution" },
    { "key": "union", "value": "A group of states or countries united under a single government" },
    { "key": "state", "value": "A self-governing region within a country" },
    { "key": "government", "value": "The system or group of people governing a country" },
    { "key": "legislature", "value": "The branch of government responsible for making laws" },
    { "key": "executive", "value": "The branch of government responsible for enforcing laws" },
    { "key": "judiciary", "value": "The branch of government responsible for interpreting laws" },
    { "key": "federal", "value": "Relating to a system of government in which power is divided between a central authority and constituent political units" },
    { "key": "secular", "value": "Not connected with or controlled by a church or other religious organization" },
    { "key": "sovereign", "value": "Having supreme power or authority" },
    { "key": "socialist", "value": "Relating to or advocating for a system of government in which the means of production are owned and controlled by the community as a whole" },
    { "key": "republic", "value": "A system of government in which the head of state is elected by the people" },
    { "key": "justice", "value": "The quality of being just or fair" },
    { "key": "liberty", "value": "The state of being free from oppressive restrictions or control" },
    { "key": "equality", "value": "The state of being equal in status, rights, or opportunities" },
    { "key": "fraternity", "value": "A feeling of friendship and mutual support among people" },
    { "key": "unity", "value": "The state of being united or joined together" },
    { "key": "integrity", "value": "The quality of being honest and having strong moral principles" }
];

const terms = definitions.map(definition => definition.key);

const Scramble = () => {
    const [word, setWord] = useState('');
    const [scrambledWord, setScrambledWord] = useState('');
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(null);
    const [flag, setFlag] = useState(true);
    const [hint, setHint] = useState('hint');
    const inputRef = useRef(null); // Create a reference to the input element

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * terms.length);
        const randomWord = terms[randomIndex];
        setWord(randomWord);
        const definition = definitions.find(def => def.key === randomWord);
        setHint(definition.value);
        const scrambledWordArray = randomWord.split('').sort(() => Math.random() - 0.5);
        setScrambledWord(scrambledWordArray.join(''));

    }, []);

    const handleUnscramble = () => {
        if (flag) {
            const userInput = inputRef.current.value; 
            if (userInput.toLowerCase() === word.toLowerCase()) {
                setScore(score + 1);
                setFlag(false)
                setResult(<div className="bg-green-500 text-white p-4 rounded">Correct! Your score is now {score + 1}</div>);
            } else {
                setResult(<div className="bg-red-500 text-white p-4 rounded">Sorry, that's not correct. The correct answer is {word}</div>);
            }
        }
    };

    const handleNewWord = () => {
        setFlag(true)
        const randomIndex = Math.floor(Math.random() * terms.length);
        const randomWord = terms[randomIndex];
        setWord(randomWord);
        const definition = definitions.find(def => def.key === randomWord);
        setHint(definition.value);
        const scrambledWordArray = randomWord.split('').sort(() => Math.random() - 0.5);
        setScrambledWord(scrambledWordArray.join(''));
        setResult(null);
        inputRef.current.value = ''; 
    };

    return (
        <>

            <div className='bg-gradient-to-br  from-blue-900 via-black to-blue-900 h-screen'>
                <img src='https://cdn-icons-png.flaticon.com/128/17621/17621022.png'  width={500} alt='scrabble' className='absolute opacity-45 z-10' />
                <div className="flex flex-col items-center justify-center gap-6 p-4 pt-6 md:p-6 lg:p-12">
                    <h1 className="text-6xl text-white font-extrabold text-center z-20">Word Scrambler Game</h1>
                    <p className="text-4xl font-semibold text-white mb-4 text-center z-20">Unscramble the word to earn points!</p>
                    <p className="text-2xl text-white text-center z-20">Scrambled word: <span className='text-blue-700 p-1 rounded-lg bg-yellow-400 font-extrabold'>{scrambledWord}</span></p>
                    <p className="text-2xl mb-4 text-center z-20 text-orange-600">Hint: {hint}</p>

                    <div className="pb-4 z-20">
                        <input
                            type="text"
                            ref={inputRef}
                            className="w-96 p-2 pl-10 text-lg text-gray-700 rounded-full border-b-4"
                            placeholder="Enter your answer"
                        />
                    </div>

                    <div className='flex flex-wrap gap-4 z-20'>
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl w-40"
                            onClick={handleUnscramble}
                        >
                            Unscramble
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl w-40 "
                            onClick={handleNewWord}
                        >
                            New Word
                        </button>
                    </div>
                    {result && <div className="mt-4">{result}</div>}
                    <p className="text-white mt-4 font-bold text-3xl z-20">Score: {score}</p>
                </div>
            </div>

        </>
    );
};

export default Scramble;