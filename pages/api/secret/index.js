import {getSession} from 'next-auth/client';
export default async(req,res)  => {
    const session = await getSession({req});
    if (session) {
        res.json({
            content:"Welcome in secret"
        })
    }
    else {
        res.json({error:
        'error'})
    }


}