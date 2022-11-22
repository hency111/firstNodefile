module.exports.comment = function(req,res){
    return res.render('comment');
}

module.exports.commentAdd = function(req,res){
    return res.render('addComment');
}