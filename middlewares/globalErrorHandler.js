const globalErrorHandler = (err,req,res,next)=>{
    // status
    // message
    // stack trace
    const stack = err.stack;
    const message = err.message;
    const status = err.status ? err.status:'failed';
    const statusCode = err?.statusCode ? err.statusCode:500;
    
    
    //send the response
    res.status(statusCode).json({
        message,stack,status
    })
}

module.exports = globalErrorHandler;