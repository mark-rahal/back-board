function runningInDocker() {
    return 'DOCKER' in process.env;
}

exports.getConnectionConfig = () => {
    if (runningInDocker()) {
        var connectionConfig = {
            dbHost: 'bb-db',
            dbUser: 'root',
            dbPassword: undefined,
            dbName: 'Backboard'
        };
        console.log(connectionConfig);
        return connectionConfig;
    }
    else {
        // use env vars
        var connectionConfig = {
            dbHost: process.env.DB_HOSTNAME,
            dbUser: process.env.DB_USERNAME,
            dbPassword: process.env.DB_PASSWORD,
            dbName: 'Backboard'
        };
        return connectionConfig;
    }
}