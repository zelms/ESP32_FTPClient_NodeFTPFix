// Quick start, create an active ftp server.
const FtpSrv = require('ftp-srv');

const port=21;
const ftpServer = new FtpSrv({
    url: "ftp://0.0.0.0:" + port,
    anonymous: true,
    pasv_url: "192.168.0.197",
});

ftpServer.on('login', ({ connection, username, password }, resolve, reject) => { 
    if(username === 'username' && password === 'password'){
        return resolve({ root:"/home/zach/ftp" });    
    }
    return reject(new errors.GeneralError('Invalid username or password', 401));
});

ftpServer.listen().then(() => { 
    console.log('Ftp server is starting...')
});
