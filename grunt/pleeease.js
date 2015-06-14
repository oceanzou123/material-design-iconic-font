module.exports = {
    dist: {
        options: {
            autoprefixer: {'browsers': ["> 1%", "last 2 versions"]},
            filters: {'oldIE': true},
            opacity: true,
            pseudoElements: true,
            minifier: false
        },
        files: {
            'dist/css/material-design-iconic-font.css': 'dist/css/material-design-iconic-font.css'
        }
    },
    min: {
        options: {
            autoprefixer: {'browsers': ["> 1%", "last 2 versions"]},
            filters: {'oldIE': true},
            opacity: true,
            pseudoElements: true,
            minifier: {preserveHacks: true, removeAllComments: true}
        },
        files: {
            'dist/css/material-design-iconic-font.min.css': 'dist/css/material-design-iconic-font.css'
        }
    }
};