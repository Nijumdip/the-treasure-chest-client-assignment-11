import React, { useEffect, useState } from 'react';

const InventoryItems = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const url = '/inventory.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data));
    },[])
    return (
        <div>
            <h1>Books Categories : {books.length}</h1>
            {
                books.map(book => <li>{book.name}</li> )
            }
        </div>
    );
};

export default InventoryItems;