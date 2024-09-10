exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts : [{title : "First post", content: 'the first post'}]
    });
};

exports.createPosts = (req, res, next) => {

    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
        message : 'post was created successfully',
        posts : {
            id : new Date().toString(),
            title : title,
            content : content
        }
    })
};