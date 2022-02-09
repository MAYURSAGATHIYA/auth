const likepost = (ctx) => {
    const { post_id, like } = ctx.request.body
    const likeindex = postdata.findIndex((e) => e.id === post_id.id)
    if (post_id == -1) {
      msg = "there is no post on this index please choose other"
    }
    else {
      like[likeindex] = postdata
      ctx.body = "you have liked this post"
    }
  
  }
  
module.exports={likepost}