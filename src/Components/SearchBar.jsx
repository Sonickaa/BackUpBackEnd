import React, { useState } from 'react';

export default function SearchBar(recipes) {
    const [searchInput, setSearchInput] = useState("");
    const searchBar = () => {
        const x = recipes;
        const handleChange = (e) => {
            e.preventDefault();
            setSearchInput(e.target.value);

            if (searchInput.length > 0) {
                x.filter((someRecipe) => {
                    return someRecipe.fields.recipeName.match(searchInput);
                });
            }
        };

    }
    return(
        <>
            <input type="text" placeholder='Search Recipies' onChange={searchBar} value={searchInput} />
        </>
    );
}