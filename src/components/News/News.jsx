import React, { useState, useEffect } from 'react';

export const Loader = () => {
    return (
        <div role="status" className='text-center'>
            <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                />
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    );
};

const News = () => {
    const [news, setNews] = useState([]);  // Initialize as an empty array
    const [loading, setLoading] = useState(true);

    const api = async () => {
        try {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=498950393eba4c75b1ae2a427279dae5');
            const result = await response.json();
            setNews(result.articles || []);  // Set articles or an empty array as a fallback
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch news:", error);
            setNews([]);  // Set an empty array if there's an error
            setLoading(false);
        }
    };

    useEffect(() => {
        api();
    }, []);

    return (
        <div className="flex flex-col gap-8 bg-gradient-to-br from-blue-950 via-black to-blue-800">
            <h1 className="text-white m-auto text-5xl mt-12 font-bold">
                Latest News Headlines <span className="text-red-700 text-base">LIVE</span>
            </h1>
            {loading ? (
                <Loader />
            ) : (
                Array.isArray(news) && news.length > 0 ? (
                    news.map((item, index) => (
                        <div
                            className="mt-8 ml-16 mr-6 rounded-lg bg-white shadow-md w-400 h-32 overflow-hidden bg-gradient-to-br from-slate-400 via-white to-gray-600"
                            key={index}
                        >
                            <div className="p-4 relative z-10 flex flex-col justify-between h-full items-start">
                                <div>
                                    <h4 className="text-2xl text-gray-900 font-serif font-medium">
                                        {item.title}
                                    </h4>
                                </div>
                                <a
                                    className="px-4 py-2 text-sm text-blue-100 bg-red-500 rounded shadow-black font-serif"
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-white text-center">No news available</p>
                )
            )}
        </div>
    );
};

export default News;
