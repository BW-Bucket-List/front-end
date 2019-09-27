import React from "react";
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../scss/Items.scss';
import { Link } from "react-router-dom";
import EditItem from './EditItem';
import CreateNewItem from "./CreateNewItem"
import {connect} from 'react-redux';


const growBtn = onButton =>{

    const button = document.querySelectorAll(".create-item");

    button.forEach(item =>{ 
        item.addEventListener("mouseenter", e =>{
            item.style.transform = "scale(1.05)";
            item.style.transform = "1s";
        });
        item.addEventListener("mouseleave", e =>{
            item.style.transform="scale(1)";
        });
    });
}


const Items = props => {

    return (

        <div className='item-page'>
            <Link to="items/newitem"><button onMouseEnter={growBtn}  className='create-item'><CreateNewItem /></button></Link>
            <div className='items'>
                {props.items.map(item => (
                    <Card key={item.id} className='item'>
                        <Card.Content>
                            <h2>Item</h2>
                            <Card.Header>Name: {item.bucket_list_item_name}</Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <strong>Journal:</strong> {item.bucket_list_item_journal}
                        </Card.Content>
                        <Card.Content extra>
                            <strong>Photos</strong>
                            <ul>
                            {item.bucket_list_item_photo? item.bucket_list_item_photo.map(photo => (
                            <li>{photo}</li>
                                )) : "No Images Uploaded" }
                            </ul>
                        </Card.Content>
                        <Card.Content extra>
                            <strong>Voice:</strong> {item.bucket_list_item_voice ? item.bucket_list_item_voice : "No Voice Recordings"}
                        </Card.Content>
                        <Card.Content extra>
                            <strong>Video:</strong> {item.bucket_list_item_video ? item.bucket_list_item_video : "No Videos"}
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

const mapStateToProps = state =>({
    user:state.user,
    isAuth:state.isAuth
  })

export default connect(mapStateToProps,{})(Items);