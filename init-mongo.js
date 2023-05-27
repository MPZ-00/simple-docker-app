db = db.getSiblingDB('my-db');
db.createUser({
    user: 'overlord',
    pwd: '+lhK>5Ge-MI9gwLR',
    roles: [{
        role: 'readWrite',
        db: 'my-db'
    }],
})
db.createCollection('users');