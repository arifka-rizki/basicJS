let { User } = require('./user/user');

module.exports = {
    run:(elementId) => {
        let elm = document.getElementById(elementId);
        let user = new User();
        
        user.loadUser(1)
            .then(result => {
                console.log(user);
                console.log(result);
                elm.innerHTML = `User is ${user.id}`;
            });
    }
}