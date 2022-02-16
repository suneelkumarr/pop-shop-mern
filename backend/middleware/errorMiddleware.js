exports.notFound = (req, res, next) => {
    const error = new Error(`Not Error -${req.originalUrl}`);
    res.status(404).send(error)
    next()
}


exports.errorHandler = (err,req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.send({
        message: err.message,
        stack:process.env.NODE_ENV !== 'production' ? null :err.stack,
    })
}
