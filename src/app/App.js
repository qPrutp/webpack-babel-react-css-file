import React from 'react';
import { sum as addFunc } from '../js/sum';
import ImageList from './ImageList';

const App = () => {
    const sum = addFunc(2, 4);

    return (
        <>
            <h1>Hello, world!</h1>
            <p>2 + 4 = {sum}</p>
            <ImageList />
        </>
    );
}

export default App;