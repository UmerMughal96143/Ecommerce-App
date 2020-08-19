import React from 'react';
import SHOPDATA from './shop_data';
import CollectionPreview from '../../Collection-Preview/Collection.Preview.component';


class ShopPage extends React.Component{

    constructor(){
        super()
        this.state={
            collections : SHOPDATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div>
                {collections.map(({id , ...otherPropsCollection}) => 
                    (<CollectionPreview key={id} {...otherPropsCollection} />  ))}
            </div>
        )
    }
}   


export default ShopPage;