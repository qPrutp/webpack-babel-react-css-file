import React, { Component } from 'react'

class Header extends Component {
    state = {
        name: 'Header!',
    }

    render() {
        return (
            <header className="test-header" style={{minHeight: "60px"}}>
                <div className="container" style={{textAlign: "center"}}>
                    {this.state.name}
                    <div className="">
                        <button
                            onClick={() => console.log([1, 2, [3, 4, [[[[[5]]]], 6]]].flat(Infinity))}
                        >print flat()</button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header
