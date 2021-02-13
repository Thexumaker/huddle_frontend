import jwt from 'next-auth/jwt'
const jwts = require('jsonwebtoken')


const secret = process.env.JWT_SECRET

export default async (req, res) => {
  const token = await jwt.getToken({ req, secret,raw:true})
  const verify = jwts.verify(token, process.env.JWT_SECRET)
  res.json(verify)
}