import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
const jwt = require('jsonwebtoken')


const options = {
    
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET

    }),
    Providers.Email({
        server: `smtp://${process.env.EMAIL_SERVER_USER}:${process.env.EMAIL_SERVER_PASSWORD}@${process.env.EMAIL_SERVER_HOST}:587`,
        from: process.env.EMAIL_FROM

    }),
],session:{
    jwt: true, 
  
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
}
,
jwt: {
    // A secret to use for key generation - you should set this explicitly
    // Defaults to NextAuth.js secret if not explicitly specified.
    secret: process.env.JWT_SECRET,
    
    
    // Set to true to use encryption. Defaults to false (signing only).
    encryption: false,
  
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    encode: async ({ secret, token, maxAge }) => {
        const encodedToken = jwt.sign(token, secret, { algorithm: 'HS512' })
      
        return encodedToken
    },
    decode: async ({ secret, token, maxAge }) => {
        const verify = jwt.verify(token, secret)
      
        return verify
    },
      
        
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },
database: {
    type: "mongodb",
    uri: "mongodb+srv://HuddleAdmin:uCD9z0lA9XAQ0xos@deployment.3gni0.mongodb.net/test",
    w: "majority",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
  }

}

export default (req, res) => NextAuth(req, res, options)