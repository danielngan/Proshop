const notFound = (req, res, next) => {
    let error = new Error(req.originalURL);
    res.status(404);
    next(error);
}

const errorHandler = (err, req, res, next) => {
 let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
 let message = err.message;

 if (err.name === 'CastError' && err.kind === 'ObjectId') {
    message =  `Resource not found`;
    res.status(404);
 }

 res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
 });

}


export  {notFound,  errorHandler};