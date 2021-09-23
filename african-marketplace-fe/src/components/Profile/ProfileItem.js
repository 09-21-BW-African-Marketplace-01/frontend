import React from 'react';
import { Button } from '@mui/material';

const ProfileItem = (props) => {
    const { item } = props;
    return (
        <div>
            <h3>{item.item_name}</h3>
            <h4>{item.item_description}</h4>
            <h4>${item.item_price}</h4>
            <Button>Edit</Button>
        </div>
    )
}

export default ProfileItem;