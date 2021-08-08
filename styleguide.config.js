const path = require('path');

module.exports = {
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/styleguide/Wrapper')
    },
    template: {
        favicon: 'https://react-styleguidist.js.org/img/logo.svg',
        head: {
            links: [
                {href: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap', rel: 'stylesheet'},
                {href:'https://fonts.gstatic.com', rel: 'preconnect'},
                {href: './src/index.css', rel: 'stylesheet'}
            ],
            scripts: [{src: 'https://kit.fontawesome.com/b282f36c60.js', crossorigin: 'anonymous'}]
        }
    },
    components: 'src/components/**/*.js',
    ignore: ['src/components/**/*.styles.js', 'src/components/**/*.test.js']
};
