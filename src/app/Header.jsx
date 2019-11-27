import React, { Component } from 'react';

class Header extends Component {
    state = {
        name: 'Header!',
        loading: false,
        error: false,
        response: {}
    }

    consoleLog = (e) => console.log(e.target)

    getData = async () => {
        this.setState({
            error: false,
            loading: true
        });
        try {
            const res = await fetch('http://dummy.restapiexample.com/api/v1/employees');
            const response = await res.json();

            this.setState({
                loading: false,
                response
            });
        } catch (error) {
            this.setState({
                error: true,
                loading: false
            });
        }
    }

    render() {
        const { name, loading, error } = this.state;
        return (
            <header style={{width: "300px"}}>
                <div className="container" style={{textAlign: "center"}}>
                    
                    {name}
                    {loading && <div>loading ...</div>}
                    {error && <div>error</div>}

                    <div className="">
                        <button
                            onClick={this.consoleLog}
                        >console log</button>
                    </div>
                    <div className="">
                        <button
                            onClick={this.getData}
                        >data from server</button>
                    </div>
                    <div className="">
                        <button
                            onClick={()=>console.log(this.state)}
                        >print state</button>
                    </div>
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

export default Header;
