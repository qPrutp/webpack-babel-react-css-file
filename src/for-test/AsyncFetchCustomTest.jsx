import React from 'react'
import PropTypes from 'prop-types'
import InfoBlock from './ui/InfoBlock.jsx'

class AsyncFetchCustomTest extends React.Component {
    static defaultProps = {
        title: 'default title AsyncFetchCustomTest',
        loadingFunc: () => console.log('empty loadingFunc'),
        errorFunc: () => console.log('empty errorFunc'),
        loadedFunc: (res) => console.log('empty loadingFunc', res)
    }

    state = {
        loading: false,
        error: false,
        success: false,
        response: {}
    }


    startRequest = async () => {
        const { loadingFunc, errorFunc, loadedFunc } = this.props
        loadingFunc()
        this.setState({
            error: false,
            success: false,
            loading: true
        })

        try {
            const res = await fetch('http://dummy.restapiexample.com/api/v1/employees')
            if (!res.ok) {
                this.setState({
                    error: true,
                    loading: false
                })
                throw Error(res.statusText)
            }
            const json = await res.json()

            loadedFunc(json)
            this.setState({
                success: true,
                loading: false,
                response: json
            })
        } catch (error) {
            errorFunc(error)
            this.setState({
                error: true,
                success: false,
                loading: false
            })
        }
    }

    render() {
        const { title } = this.props;
        const { loading, error, success } = this.state;
        return (
            <div className="asyncFetchCustomTest">
                <p>{title}</p>
                {loading && <InfoBlock>loading ...</InfoBlock>}
                {error && <InfoBlock>error</InfoBlock>}
                {success && <InfoBlock>success</InfoBlock>}
                <button
                    onClick={this.startRequest}
                >test async fetch</button>
            </div>
        )
    }
}

AsyncFetchCustomTest.propTypes = {
    loadingFunc: PropTypes.func,
    errorFunc: PropTypes.func,
    loadedFunc: PropTypes.func,
    title: PropTypes.string
}

export default AsyncFetchCustomTest
