import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';

const ResultScreen = () => {
    const [originalString, setOriginalString] = useState('');
    const [resultString, setResultString] = useState('');
    const { string } = useParams();
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');
    const [contentWithColors, setContentWithColors] = useState({});

    useEffect(() => {
        if (!string) {
            navigate('/');
            return;
        }
        setOriginalString(string);
        setResultString(string);
    }, [string, navigate]);

    const handleCharClick = (char) => {
        let foundDuplicate = false;
        const updatedString = originalString.split('').filter((c) => {
            if (c === char && !foundDuplicate) {
                foundDuplicate = true;
                return true;
            }
            return c !== char;
        }).join('');

        setOriginalString(updatedString);
        setResultString(updatedString);
    };

    // Function to generate random color
    const generateRandomColor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    };

    useEffect(() => {
        const data = originalString.split('');
        const updatedContentWithColors = {};
        data.forEach((item) => {
            const borderColor = updatedContentWithColors[item]
                ? updatedContentWithColors[item]
                : generateRandomColor();
            updatedContentWithColors[item] = borderColor;
        });
        setContentWithColors(updatedContentWithColors);
    }, [originalString]);

    useEffect(() => {
        const hasDuplicates = originalString.length !== new Set(originalString).size;
        if (!hasDuplicates) {
            setSuccessMessage(`All duplicate characters removed successfully!\nOriginal String: ${originalString}\nResult String: ${resultString}`);
        } else {
            setSuccessMessage('');
        }
    }, [originalString, resultString]);

    return (
        <section className="screen-2 w-full h-screen bg-black/80">
            <div className="container w-full bg-white lg:w-[80%] sm:w-full lg:mx-auto h-full p-5">
                <h1 className='font-bold text-xl text-center capitalize mb-10'>Result</h1>
                {successMessage ? (
                    <div className="success mb-20 text-center text-green-500 font-bold">
                        <p className='mb-20'>{successMessage}</p>
                        <Link
                            className="font-bold capitalize text-lg outline-none hover:border-2 active:border-2 bg-black rounded-lg text-white w-full hover:bg-transparent hover:text-black hover:border-black active:bg-transparent active:text-black active:border-black h-16 py-3 px-5"
                            to="/"
                        >
                            Back
                        </Link>
                    </div>
                ) : (
                    <div className="string-container grid sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                        {originalString.split('').map((char, index) => (
                            <div key={index} className={`border-4 border-${contentWithColors[char]} w-full h-20 flex flex-row items-center justify-between uppercase px-4`}
                                style={{ borderColor: contentWithColors[char] }} onClick={() => handleCharClick(char)}>
                                {char}
                                <RiDeleteBin6Line className="delete-icon" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ResultScreen;
