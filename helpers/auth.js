const alertMessage = require('./messanger'); // Bring in alert messenger
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) { // If user is authenticated
        return next(); // Calling next() to proceed to the next statement
    }
    // If not authenticated, show alert message and redirect to ‘/home’
    alertMessage(res, 'danger', 'Please login before attempting to access our features.', 'fas fa-exclamation-circle', false);
    res.redirect('/login');
};
module.exports = ensureAuthenticated;