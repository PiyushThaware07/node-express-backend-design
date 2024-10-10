exports.getAll = async function (req, res) {
    return res.send("get all post");
}

exports.getById = async function (req, res) {
    return res.send("get post by id");
}

exports.create = async function (req, res) {
    return res.send("create new post");
}

exports.updateById = async function (req, res) {
    return res.send("update post by id");
}

exports.deleteById = async function (req, res) {
    return res.send("delete post by id");
}