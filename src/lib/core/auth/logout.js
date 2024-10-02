module.exports = async function (req, res) {
    try {
        hcx.cookies.delete(res, "hcx.user")
        req.session.destroy(() => {
            return {success: true, code: 200}
        });
    } catch (error) {
        System.err.println(error)
        return {success: false, code: 500}
    }
}