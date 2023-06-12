class Reply {
  replyId;
  parentCommentId; // -> Points to comment table
  replyBody;
  createdDate;
  likeCount;
  authorId; // -> Points to user table
}
