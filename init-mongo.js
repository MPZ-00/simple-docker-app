db = db.getSiblingDB('my-db');
db.createUser({
    user: 'admin',
    pwd: 'password',
    roles: [{
        role: 'readWrite',
        db: 'my-db'
    }],
})
db.createCollection('users');