import { NextApiRequest, NextApiResponse } from "node/next"

const handler = (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method?.toLowerCase() === 'get') res.status(200).json({ 'get': '这是get请求' })
    else if (req.method?.toLowerCase() === 'post') res.status(200).json({ 'post': '这是post请求' })

}

export default handler