import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleList from '../components/ArticleList';

const HomePage = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const res = await axios.get('/api/posts');
            setArticles(res.data);
        };

        fetchArticles();
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <ArticleList articles={articles} />
        </div>
    );
};

export default HomePage;
