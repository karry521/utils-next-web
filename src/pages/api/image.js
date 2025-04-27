export default async function handler(req, res) {
    const { url } = req.query

    res.setHeader('Access-Control-Allow-Origin', '*') // ⭐ 允许所有域名访问
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }

    if (typeof url !== 'string') {
        res.status(400).send('Missing url parameter')
        return
    }

    try {
        const response = await fetch(url)

        if (!response.ok) {
            res.status(response.status).send('Failed to fetch image')
            return
        }

        // 1. 取得图片的 content-type（例如 image/webp）
        const contentType = response.headers.get('content-type') || 'application/octet-stream'
        const buffer = await response.arrayBuffer()

        // 2. 返回图片的二进制内容
        res.setHeader('Content-Type', contentType)
        res.setHeader('Cache-Control', 'public, max-age=3600') // 可选：缓存1小时
        res.status(200).send(Buffer.from(buffer))
    } catch (error) {
        console.error('Proxy error:', error)
        res.status(500).send('Internal Server Error')
    }
}