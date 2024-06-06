class UserNotValidExcaption extends Error {
    constructor(message){
        super(message);
    }
};


module.exports = { UserNotValidExcaption };