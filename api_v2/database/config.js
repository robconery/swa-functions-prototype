const { database } = require('swa-api');

function canEdit(user, data){
    return user.id === data.user.id || user.roles.indexOf("admin") > -1;
}

module.exports = database.config({
    collections: {
        "todos": {
            create: canEdit,
            update: canEdit,
            delete(args){
                return canEdit(args) && !args.data.locked;
            },
            get({auth, id}){
                return auth !== null;
            },
            list({auth}){
                return true;
            },
            authenticated: true, //as an option
            // permissions: [
            //     {
            //         operations: [
            //             "findDocuments",
            //             "insertDocument",
            //             "replaceDocument",
            //             "deleteDocument"
            //         ],
            //         allowedRoles: [ "authenticated" ],
            //         restrictDocsByUser: true
            //     }
            // ],
            notifyOnChange: true
        }
    }
});