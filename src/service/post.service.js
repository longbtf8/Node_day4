const postModel = require("@/model/post.model");
const paginationService = require("@/service/pagination.service");
class PostService {
  model = postModel;
  constructor() {
    // this.pagination = async (page) => {
    //   const result = await paginationService.apply(postModel, page, 10);
    //   return result;
    // };
    paginationService.apply(this);
  }
}

module.exports = new PostService();
