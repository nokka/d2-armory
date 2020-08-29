db = db.getSiblingDB('armory');
db.createUser({
    user: "armory",
    pwd: "not_secure_at_all",
    roles: [{
        role: "readWrite",
        db: "armory"
    }]
});
