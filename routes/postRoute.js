const express = require("express");

const router = express.Router();

router.get("/post/:id", (req, res) => {
  const { id } = req.params;
  // Make a DB call to Post table by the id, to get
  // post info along with comments and replies.
  let post = {
    postId: "postId",
    author: {
      userId: "userId1",
      name: "SportsCenter",
      email: "email@email.com",
      profilePicture: "someurlforphoto.com/photo",
    },
    createdDate: new Date(),
    postBody:
      "COMMENT with your questions for Herm Edwards. He's taking over our page at 9 a.m. ET to answer YOU!",
    likeCount: 5851,
    comments: [
      {
        commentId: "commentObj1",
        replies: [
          {
            replyId: "replyId1",
            replyBody: "This is reply",
            createdDate: new Date(),
            likeCount: 1,
            author: {
              userId: "userId3",
              name: "Pradeep",
              email: "email@email.com",
              profilePicture: "someurlforphoto.com/photo",
            },
          },
        ],
        author: {
          userId: "userId2",
          name: "SteveAndrastek",
          email: "email@email.com",
          profilePicture: "someurlforphoto.com/photo",
        },
        commentBody: "fjnffnekdke",
        likeCount: 5,
        createdDate: new Date(),
      },
    ],
  };
  return res.status(200).send(post);
});

module.exports = router;
