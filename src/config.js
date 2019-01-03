const prod = process.env.NODE_ENV === 'production';
const SITE_URL = prod ? 'http://68.183.70.40:3000' : 'http://68.183.70.40:3000' ;

const API_URL = `${SITE_URL}/api`;
const REACT_APP_SIGN_IN_URL = `${SITE_URL}/auth/login`;

const config  = {
  'process.env.API_URL': API_URL,
  'REACT_APP_SIGN_IN_URL': REACT_APP_SIGN_IN_URL
};

export default config;

