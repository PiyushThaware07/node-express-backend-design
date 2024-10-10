exports.getAll = async function (req, res) {
    return res.send("get all user");
}

exports.getById = async function (req, res) {
    return res.send("get user by id");
}

exports.create = async function (req, res) {
    return res.send("create new user");
}

exports.updateById = async function (req, res) {
    return res.send("update user by id");
}

exports.deleteById = async function (req, res) {
    return res.send("delete user by id");
}