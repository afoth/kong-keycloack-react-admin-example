import * as React from 'react';
import { forwardRef } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';

import { useKeycloak } from '@react-keycloak/web'

const LogoutButton = forwardRef((props, ref) => {

    const {keycloak, initialized} = useKeycloak();
    
    const handleClick = () => {
        console.log("logout!");
        keycloak.logout();
    }
    
    return (
        <MenuItem
            onClick={handleClick}
            ref={ref}
        >
            <ExitIcon /> Logout
        </MenuItem>
    );
});

export default LogoutButton;

