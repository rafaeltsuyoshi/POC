const repository = require("../repository/recoverAllDB")

module.exports = (req: Request, res: Response): void => {
    return repository.findall()
}