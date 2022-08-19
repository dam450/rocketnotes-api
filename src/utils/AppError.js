class AppError {
  message
  statusCode

  /**
   * Create a error structure for the app
   * 
   * @param {String} message  text
   * @param {Integer} statusCode  http error code number (default code 400)
   */
  constructor (message, statusCode = 400){
    this.message = message
    this.statusCode = statusCode
  }
}

module.exports = AppError