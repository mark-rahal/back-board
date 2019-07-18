function runningDevEnv() {
    return 'DEV' in process.env;
}

function runningInDocker() {
    return 'DOCKER' in process.env;
}

exports.getConnectionConfig = () => {
    if (runningDevEnv()) {
        var connectionConfig = {
            dbHost: 'localhost',
            dbUser: 'root',
            dbPassword: undefined,
            dbName: 'Backboard'
        };
        if (runningInDocker()) {
            connectionConfig.dbHost = 'bb-db';
        }
        console.log(connectionConfig);
        return connectionConfig;
    }
    else {
        //will use aws userdata
    }
}