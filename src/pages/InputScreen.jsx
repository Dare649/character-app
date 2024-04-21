import { useState } from 'react';
import { axiosClient } from '../axios';
import { useNavigate } from 'react-router-dom';

const InputScreen = () => {
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') {
            setError('Please provide a non-empty value.');
            return;
        }
        setLoading(true);
        try {
            const response = await axiosClient.post('/characterInput', { input: inputValue.trim() });
            const { data } = response.data;
            navigate(`/result/${inputValue.trim()}`);
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        }
        setLoading(false);
    };

    return (
        <div className="inputScreen w-full h-screen bg-black/80 py-20">
            <div className="container lg:w-[50%] sm:w-full mx-auto sm:h-70 lg:h-[50%] flex flex-col bg-white py-14">
                <h1 className='capitalize font-bold text-center text-xl'>duplicate character card remover</h1>
                {error && <div className="error text-center text-red-500 font-medium">{error}</div>}
                <form onSubmit={handleSubmit} className='w-full h-full px-3'>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter a string"
                        className='font-medium text-lg outline-none border-2 border-x-0 border-t-0 p-3 w-full focus:border-black'
                    />
                    <div className='bg-black border-2 hover:border-black hover:bg-transparent text-white py-3 hover:text-black'>
                        <button className='capitalize font-bold w-full border-none outline-none' type="submit" disabled={loading}>
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InputScreen;
