const Tweeter = () => {

    let ind = 0;
    let c = [];
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];

    const postIdCounter = () => { posts.length }

    const commentIdCounter = () => { for (let i in posts) { posts[i].comments.length; } }
    const getPosts = () => posts

    const addPost = (text) => {

        posts[posts.length] = {
            text: text,
            id: "p" + (posts.length + 1),
            comments: []
        }

    }

    const removePost = (id) => {
        for (let i in posts) {
            if (posts[i].id === id) {
                posts.splice(i, 1);
            }
        }
    }

    const addComment = (str, id) => {
        let count = 0;
        for (let k in posts) {
            for (let j in posts[k].comments) {
                c[ind] = (posts[k].comments[j].id)
                ind++;
            }

        }

        for (let x in posts) {
            if (posts[x].id === id) {
                for (let y in posts[x].comments) {
                    count++;
                }
            }
        }

        for (let i in posts) {
            if (posts[i].id === id) {
                posts[i].comments[count] = {
                    id: "c" + (parseInt(c[c.length - 1].charAt(1)) + 1),
                    text: str
                }

            }
        }

    }

    const removeComment = (postID, commentID) => {
        for (let i in posts) {
            if (posts[i].id === postID) {
                for (let j in posts[i].comments) {


                    while ((posts[i].comments[j].id === commentID)) {
                        posts[i].comments.splice(j, 1);
                        break;
                    }
                }
            }
        }
    }

    return { posts, postIdCounter, commentIdCounter, getPosts, addPost, removePost, addComment, removeComment }
}

/*const tweeter = Tweeter()


tweeter.addPost("This is my own post!")
tweeter.getPosts()
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}
//{id: "c6", text: "Haha second place what a joke."}
tweeter.removePost("p1")
tweeter.getPosts()
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")


tweeter.getPosts()
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}
tweeter.removeComment("p2", "c6")
tweeter.getPosts()
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}*/