const config = {
    database: {
        url: 'ult',
    },
    server: {
        PORT: 3000,
        host: 'localhost',
    },
    mailer: {
        host: 'gmail',
        user: 'user',
        pass: 'pass',
    },
    secret: 'secret',
    other: {
        pagination: {
            pagesize: 12 //amount of cards on single page
        },
        saltRounds: 10,
    },
};

module.exports = config;
