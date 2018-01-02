const mongoose = require('mongooose'),
      UserModel = require('@BudgetManagerModels/user');

const models = {
    User: mongoose.model('User')
}

module.exports = models;
