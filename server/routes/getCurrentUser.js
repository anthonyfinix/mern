module.exports = (req, res) => {
    if(!req.user) return res.status(400).json({error:'You are not Registered'})
    res.status(200).json({
        name:req.user.name,
        username:req.user.username,
        email:req.user.email
    })
};
