import React from 'react'
import { ButtonToolbar, Button, OverlayTrigger, Popover } from 'react-bootstrap'
import './style.scss'

function OverlayTriggerCustom({ onHide, children }) {

    return (
        <ButtonToolbar>
            <OverlayTrigger
                trigger="click"
                placement="left"
                rootClose={true}
                overlay={
                    <Popover id="popover-contained" outOfBoundaries={false}>
                        <Popover.Title className="pt-0 pb-0">
                            <strong>Are you sure?</strong>
                        </Popover.Title>
                        <Popover.Content>
                            <Button
                                variant="outline-primary"
                                size="sm"
                                onClick={onHide}
                                className="pt-0 pb-0 w-100"
                            >Yes</Button>
                        </Popover.Content>
                    </Popover>
                }
            >
                { children }
            </OverlayTrigger>
        </ButtonToolbar>
    )
}

export default OverlayTriggerCustom
