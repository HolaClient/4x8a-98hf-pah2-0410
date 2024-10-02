let totalReqs = 0
function log(req) {
    const date = new Date(Date.now())
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    if (process.env.APP_ENV !== "production") {
        console.log(`[${date.getDate()} ${months[date.getMonth()]} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] ${req.ip}:`, req.method, req.url, `Req: #${totalReqs++}`)
        totalReqs = totalReqs++
    }
}

module.exports = { log }