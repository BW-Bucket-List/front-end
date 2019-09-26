import React from 'react';
import {Modal, Button } from 'semantic-ui-react';
import CreateNewItem from './CreateNewItem';


function EditItem (props) {
    return (
        <Modal
            trigger={
                <Button color="grey" className="neutral">
                Edit
                </Button>
            }
            >
            <Modal.Header>Item</Modal.Header>
            <Modal.Content>
                <CreateNewItem />
            </Modal.Content>
        </Modal>
    )
}

export default EditItem;