import * as React from 'react';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { PostList, PostEdit, PostCreate, PostShow } from './posts';
import { UserList } from './users';
import Dashboard from './Dashboard';
import Loading              from './Loading';

import authProvider from './authProvider';

import LogoutButton from './LogoutButton';

import {
  KEYCLOAK,
  KEYCLOAK_INIT_CONFIG
}                           from './keycloak.config';
import { KeycloakProvider } from '@react-keycloak/web';

const App = () => (
    <KeycloakProvider keycloak = { KEYCLOAK }
        LoadingComponent={ <Loading /> }
        isLoadingCheck={ (keycloak) => !keycloak.authenticated }
        initConfig={ KEYCLOAK_INIT_CONFIG }>

        <Admin
            dataProvider={jsonServerProvider(
                'http://jsonplaceholder.typicode.com'
            )}
            dashboard={Dashboard}
            authProvider = {authProvider}
            logoutButton={LogoutButton}
        >
            <Resource
                name="posts"
                icon={PostIcon}
                list={PostList}
                edit={PostEdit}
                create={PostCreate}
                show={PostShow}
            />
            <Resource name="users" icon={UserIcon} list={UserList} />
            <Resource name="comments" list={ListGuesser} />
        </Admin>
    </KeycloakProvider>
);
export default App;
