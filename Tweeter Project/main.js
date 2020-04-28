const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())


$("#post").on('click', function () {
    let newTweet = $("#input").val()
    tweeter.addPost(newTweet)
    renderer.renderPosts(tweeter.getPosts())  
})

 

$("#posts").on('click', ".delete", function () {
    let deletePostId = $(this).closest("div.post").data().id
    tweeter.removePost(deletePostId)
    renderer.renderPosts(tweeter.getPosts())

})



$("#posts").on('click', ".comBtn", function () {
    let newComment = $(this).closest(".post").find(".comInput").val()
    let postID = $(this).closest("div.post").data().id
    tweeter.addComment(newComment, postID)
    renderer.renderPosts(tweeter.getPosts())

})



$("#posts").on('click', ".delete-comment", function () {
    let commentID = $(this).closest("div.comments").data().id
    let postID = $(this).closest("div.post").data().id
    tweeter.removeComment(postID, commentID)
    renderer.renderPosts(tweeter.getPosts())
    

})






