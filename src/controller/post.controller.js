const postService = require("@/service/post.service");
const findAll = async (req, res) => {
  try {
    const page = +req.query.page || 1;

    const result = await postService.pagination(page, 10, {
      user_id: req.query.user_id,
    });

    res.paginate(result);
  } catch (error) {
    res.error(404, (message = "Resource not found"));
  }
};
module.exports = { findAll };
