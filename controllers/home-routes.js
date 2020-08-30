const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
        id: 1,
        post_body: 'wig wig wig',
        title: 'wig bank statement',
        created_at: new Date(),
        comments: [{}, {}],
        user: {
            username: 'test_user'
        }

    });
});

module.exports = router;