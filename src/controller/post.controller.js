const postService = require("@/service/post.service");
const findAll = async (req, res) => {
  try {
    const page = +req.query.page || 1;
    let limit = +req.query.limit || 20;

    // Validate and cap limit
    if (limit > 500) {
      limit = 500;
    } else if (limit < 1) {
      limit = 20;
    }

    const result = await postService.pagination(page, limit, {
      user_id: req.query.user_id,
    });

    res.paginate(result);
  } catch (error) {
    res.error(404, (message = "Resource not found"));
  }
};
module.exports = { findAll };
