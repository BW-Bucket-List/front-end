import React from "react";
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../scss/Items.scss';
import { Link } from "react-router-dom";
import EditItem from './EditItem';
import CreateNewCard from "./CreateNewItem"

const Items = props => {

    return (
        <div className='item-page'>
            <Link to="items/newitem"><button className='create-item'><CreateNewCard /></button></Link>
            <div className='items'>
                {
                    props.items.map(item => (
                        <Card key={item.id} className='item'>
                            <Card.Content>
                                <h2>Item</h2>
                                <Card.Header>Name: {item.name}</Card.Header>
                            </Card.Content>
                            <Card.Content extra>
                                <strong>Location:</strong> {item.location}
                            </Card.Content>
                            <Card.Content extra>
                                <strong>Description:</strong> {item.description}
                            </Card.Content>
                            <Card.Content extra>
                                <strong>Entries</strong>
                                <ul>
                                    {item.entries.map(entry => (
                                        <li>{entry}</li>
                                    ))}
                                </ul>
                            </Card.Content>
                            <Card.Content extra>
                                <strong>Photos</strong>
                                <ul>
                                    {item.photos.map(photo => (
                                        <li>{photo}</li>
                                    ))}
                                </ul>
                            </Card.Content>
                            <Card.Content extra className='buttons'>
                                {/* <button><Link to='items/newitem'>Edit</Link></button> */}
                                <EditItem />
                                <button><Link to='#'>Mark Complete</Link></button>
                                <button><Link to='#'>Delete</Link></button>
                            </Card.Content>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Items;