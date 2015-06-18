module.exports = {
    'prod': {
        src: 'svg/prod/*/*.svg',
        dest: 'dist/test',
        options: {
            font: 'Material-Design-Iconic-Font',
            syntax: 'bootstrap',
            stylesheet: 'less',
            centerHorizontally : true,
            normalize: true,
            //template: 'grunt/templates/glyphs.css',
            htmlDemoTemplate: 'grunt/templates/glyphs.html',
            templateOptions: {
                classPrefix: 'mdi-',
                mixinPrefix: 'mdi-'
            }
        }
    },
    'dev': {
        src: 'svg/google/*/*.svg',
        dest: 'dist/test',
        options: {
            font: 'Material-Design-Iconic-Font',
            syntax: 'bootstrap',
            stylesheet: 'css',
            centerHorizontally : true,
            normalize: true,
            template: 'grunt/templates/glyphs.css',
            htmlDemoTemplate: 'grunt/templates/glyphs.html',
            templateOptions: {
                baseClass:   'mdi',
                classPrefix: 'mdi-',
                mixinPrefix: 'mdi-'
            }
        }
    }
};