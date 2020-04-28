

const Renderer = () => {
    renderPosts = (Posts) => {
        $("#posts").empty();
        for (let post of Posts) {
            let postBox = $(`<div class='post'  data-id = '${ post.id}'> <p class='post-text' > ${ post.text} </p > </div>`)
           
            for (let com of post.comments) {
                let comment = $(`<div class='comments'  data-id ='${ com.id }'> <span class='delete-comment'> x </span> ${com.text} </div>`)
                $(postBox).append(comment)
                console.log(com.text)

            }
            $("#posts").append(postBox)

        }

        const addComment = $(`<input type = "text"  class="comInput"  placeholder = "whats -mind?"><button  class="comBtn">Comment</button><br><br>`)
        $('.post').append(addComment)
        const deletePost = $('<div class = "delete">Delete post </div>')
        $('.post').append(deletePost)
        
    }

    return { renderPosts }
}
//const r = Renderer();
