const MacAddressValidation = (request, response, next) => {
    if (!request.body.macaddress) {
        return response.status(400).json({ message: 'macaddrress is required' })
    }
    next()
}

module.exports = MacAddressValidation