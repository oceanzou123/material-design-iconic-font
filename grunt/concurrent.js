module.exports = {
    // Options
    options: {
        limit: 3
    },
    // Development tasks
    devFirst: [
        'clean'
    ],
    devSecond: [
        'less:dev'
    ],
    devThird: [
        'pleeease:dist',
        'pleeease:min'
    ],
    // Production tasks
    prodFirst: [
        'clean'
    ],
    prodSecond: [
        'less:prod'
    ],
    prodThird: [
        'pleeease:dist',
        'pleeease:min'
    ]
};