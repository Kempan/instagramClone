// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID })
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const router = vertex.router()

/*  This is a sample API route. */

router.get('/:resource', (req, res) => {
  res.json({
    confirmation: 'success',
    resource: req.params.resource,
    query: req.query // from the url query string
  })
})

router.post('/signup', (req, res) => {
  turbo.createUser(req.body)
    .then(data => {
      res.json({
        confirmation: 'success',
        data: data
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message
      })
    })

})

router.post('/login', (req, res) => {
  turbo.login(req.body)
    .then(data => {
      res.json({
        confirmation: 'success',
        data: data
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message
      })
    })
})

router.post('/users/:id/photo'), (req, res) => {

  const userId = req.params.id;

  console.log(req.params);
  console.log(req.body);
}

router.get('/:resource/:id', (req, res) => {
  res.json({
    confirmation: 'success',
    resource: req.params.resource,
    id: req.params.id,
    query: req.query // from the url query string
  })
})



module.exports = router
