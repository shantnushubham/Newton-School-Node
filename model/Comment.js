class Comment {
  commentId;
  postId; // Points to post table
  replies; // List of reply Ids
  authorId; // -> User table
  commentBody;
  createdDate = new Date();
  likeCount;
}
