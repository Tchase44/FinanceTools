import { ExtractJwt } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/passport-jwt';

const PassportJWT = require('passport-jwt'),
      ExtractJWT = PassportJWT.ExtractJwt,
      Strategy = PassportJWT.Strategy,
      config = require('./index.js'),
      models = require('@BudgetManager/app/setup');

module.exports = (passport) => {
    const User = models.User;

    const parameters = {
        secretOrKey: config.secret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }
// idk what this does nor how
    passport.use(new Strategy(parameters, (payload, done)=>{
        User.findOne({ id: payload.id }, (error,done)=>{
            if(error) return done(error, false)
            if(user) done(null,user)
            else done(null, false)
        })
    }))
}