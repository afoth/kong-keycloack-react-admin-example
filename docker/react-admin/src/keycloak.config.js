import keycloak_config_file from './keycloak.json';
import Keycloak             from 'keycloak-js';


// Keycloak config

export const KEYCLOAK = Keycloak(keycloak_config_file);

export const KEYCLOAK_INIT_CONFIG = {
  onLoad: 'login-required',
  checkLoginIframe: false,
  'enable-cors': true,
};

export const TOKEN_MIN_VALIDITY = 60; // In seconds
