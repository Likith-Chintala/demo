const baseApiDomain = process.env.REACT_APP_API_BASE_DOMAIN || '';
const AppConstants = {
    PAGE_SIZE: 10,
    LOOKUP_PAGE_SIZE: 25,
    DEFAULT_TITLE: 'Strobes - Your Security Platform',
    BASE_API_URL: `${baseApiDomain}/api`,
    BASE_ORG_API_URL: `${baseApiDomain}/api`,
    LOCAL_STORAGE_USER_KEY: 'strobes.username',
    LOCAL_AUTH_KEY: 'strobes.auth',
    LOCAL_LOGOUT_SIGNAL: 'strobes.isLogoutSignal',
    LOCAL_DEPLOY_KEY: 'strobes.deployment',
    LOCAL_METADATA: 'strobes.meta',
    INITIAL_PAGE_OFFSET: 0,
    UAT_RECAPTCHA_SITE_KEY: '6LdlmzkdAAAAABpAVsAb9atsurVaajyQMGaSRJcF',
    PROD_RECAPTCHA_SITE_KEY: '6LcNoisdAAAAALyMD3ckn99C1J0tCB1wxo82QEfk',
};

export default AppConstants;
