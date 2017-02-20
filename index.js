function postComment() {
  const commenter = document.getElementById("commenterName").value;
  const comment = document.getElementById("commentText").value;

  const commentTemplate = document.getElementById("comment-template").innerHTML;

  const templateFn = _.template(commentTemplate);

  const commentsDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  const templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
