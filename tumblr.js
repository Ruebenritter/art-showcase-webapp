tumblr.init({
    tumblr:{
        id: 'zWqB9Joyugxq6m1cDwWPtILXgXy734iE22VJa4aC3PyvBMturO',
        oauth: {
            version: '1.0a',
            auth: 'https://www.tumblr.com/oauth/authorize',
            request: 'https://www.tumblr.com/oauth/request_token',
            token: 'https://www.tumblr.com/oauth/access_token'
        },
        scope: {
            basic: 'read, write',
        }
    }
}, {
    redirect_uri: 'https://ruebenritter.github.io/art-showcase-webapp/callback'
});

function tumblrLogin() {
    tumblr.login(function(token) {
        console.log('Logged in:' ,token);
    },
    function(error) {
        console.log('Error:', error);
    });
}