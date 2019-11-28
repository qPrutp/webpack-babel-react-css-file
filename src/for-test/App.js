import React from 'react'
import { sum as addFunc } from './js/sum'
import ImageList from './ImageList'
import Header from './Header.jsx'
import AsyncFetchCustomTest from './AsyncFetchCustomTest.jsx'

import './css/main.css'
import './scss/main.scss'

const App = () => {
    const sum = addFunc(2, 4)

    return (
        <>
            <Header />
            <h1>Test</h1>
            <p>2 + 4 = {sum}</p>
            <ImageList />
            <AsyncFetchCustomTest />
        </>
    )
}

export default App