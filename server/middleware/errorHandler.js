const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    const status = err.status || 500;
    const message = err.message || 'Server Error';
    res.status(status).json({ error: message });
};

module.exports = errorHandler;
