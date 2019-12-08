import React from 'react'
import { connect } from 'react-redux'
import { compose } from '../../utils'
import { withAppService } from '../../components/Hoc'
import { Helmet } from 'react-helmet'
import { Container, ButtonToolbar, Button, Alert, Modal } from 'react-bootstrap'
import {
    printGlobalProps
} from '../../actions'
import RowMain from '../../components/RowMain'
import ResultModal from './ResultModal'

class Test1 extends React.Component {
    state = {
        id: 1,
        loading: false,
        error: false,
        success: false,
        response: {},
        modalShow: false
    }

    getFetch = async() => {
        this.setState({
            error: false,
            success: false,
            loading: true,
            modalShow: false
        })

        try {
            const response = await this.props.getEmployee(this.state.id)

            return this.setState({
                success: true,
                loading: false,
                response,
                modalShow: true
            })
        } catch (error) {
            console.error('Щось пішло не так із Test1 getFetch!')
            this.setState({
                error: true,
                success: false,
                loading: false,
                modalShow: false
            })
        }
    }

    toggleModalShow = () => {
        this.setState(state => {
            return { modalShow: !state.modalShow }
        })
    }

    render() {
        const { loading, error, success, modalShow } = this.state
        return (
            <Container>
                <Helmet>
                    <title>Test 1</title>
                </Helmet>
                
                <RowMain
                    left={(
                        <React.Fragment>
                            <Alert variant="danger">
                                Test 1 Page!&#8195;
                                {loading && 'loading...'}
                                {success && 'success'}
                                {error && 'error'}
                            </Alert>
                            <ButtonToolbar>
                                <Button
                                    onClick={this.getFetch}
                                    variant="outline-primary"
                                >Fetch</Button>
                                <Button
                                    onClick={this.props.printGlobalProps}
                                    variant="outline-info">Props</Button>
                                <Button
                                    onClick={() => console.log(this.state)}
                                    variant="outline-info">State</Button>
                            </ButtonToolbar>
                        </React.Fragment>)}
                />

                <ResultModal show={modalShow} onHide={this.toggleModalShow} message={'fetch success'} />
            </Container>
        )
    }
}

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { appService } = ownProps
    return {
        printGlobalProps: () => dispatch(printGlobalProps()),
        getEmployee: id => appService.getEmployee(id)
    };
};

export default compose(
    withAppService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Test1)
