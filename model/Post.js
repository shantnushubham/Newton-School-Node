class Post {
  postId;
  authorId; // -> Points to User Table
  createdDate;
  postBody;
  likeCount;
  comments; // List of commentIds
}
