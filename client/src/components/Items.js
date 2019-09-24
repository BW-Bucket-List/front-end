import React from "react";
import '../scss/Items.scss'

const Items = props =>{
    
    return(
        <div>
            {
                props.items.map( item => (
                    <div key={item.id} className='item'>
                        <div>
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.location}</p>
                                <p>{item.description}</p>
                                <div>{item.entries.map(entry => (
                                    <p>{entry}</p>
                                ))}</div>
                                <div>{item.photos.map(photo => (
                                    <p>{photo}</p>
                                ))}</div>                                  
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Items;