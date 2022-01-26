const auth = (req, method) => {

    const jwt = true
    return new Promise((welcome, gettaFuckOut) => {
        jwt ? welcome()
            : gettaFuckOut({error: "access denied", type: "auth"})
    })
}
module.exports = auth