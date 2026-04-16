//basically just logs the date and time
const logger = (req, res, next) => {
    const timestamp = new Date().toISOString(); 
    console.log(`[${timestamp} ${req.method} ${req.url}]`)
    next();  //forward to next

}
module.exports = logger;