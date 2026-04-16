const errorHandler = (err, req, res, next) => {
    console.log(err.stack);

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    //Displaying the error
    res.status(statusCode).json({
        success: false,
        message,
        ...err[process.env.NODE_ENV === 'development' && {stack:
            err.stack   //if node environment is of development then only print the stack, else do not print the stack
        }]
    })
}
module.exports = errorHandler;