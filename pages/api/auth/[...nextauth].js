import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
const jwt = require('jsonwebtoken')


const options = {
    
  // Configure one or more authentication providers
  debug: true,

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
    jwt: false, 
  
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
}
,
database: {
    type: "mongodb",
    url: process.env.DATABASE_URL,
    w: "majority",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
    
  }

}

export default (req, res) => NextAuth(req, res, options)