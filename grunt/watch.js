module.exports = {
    options: {
        interrupt: true,
        livereload: true
    },
    styles: {
        files: [
            'less/*.less',
            'less/icons/*.less'
        ],
        tasks: [
            'less:dev'
        ]
    }
};