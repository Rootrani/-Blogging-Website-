import React, { useState } from 'react';
import axios from 'axios';

const WriteArticlePage = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newArticle = { title, body, author };

        await axios.post('/api/posts', newArticle);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <button type="submit">Publish Article</button>
        </form>
    );
};

export default WriteArticlePage
