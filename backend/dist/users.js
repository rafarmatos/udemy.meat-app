"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    'rafael@gmail.com': new User('rafael@gmail.com', 'Rafael', '123'),
    'lucas@gmail.com': new User('lucas@gmail.com', 'Lucas', '123')
};
