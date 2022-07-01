const express = require('express')
const routes = require('./routes')
var cors = require('cors')
const bodyParser = require('body-parser')
const errorhandler = require('errorhandler')

let store = {
  posts: [
    {name: 'Testing JSON (POST)',
    url: 'https://www.npmjs.com/',
    text: 'meow',
    comments: [
      {text: 'Hi from Tuxtla!'},
      {text: 'Hi from suchiamsterdam!'},
      {text: 'Hi from el jobo xd'}
    ]
    }
  ]
}

let app = express()

app.use(cors())


app.use(bodyParser.json())
app.use(errorhandler())

app.use((req, res, next) => {
    req.store = store
    next()
})

app.get('/api/posts', routes.posts.getPosts)
app.post('/api/posts', routes.posts.addPost)
app.put('/api/posts/:postId', routes.posts.updatePost)
app.delete('/api/posts/:postId', routes.posts.removePost)

app.get('/api/posts/:postId/comments', routes.comments.getComments)
app.post('/api/posts/:postId/comments', routes.comments.addComment)
app.put('/api/posts/:postId/comments/:commentId', routes.comments.updateComment)
app.delete('/api/posts/:postId/comments/:commentId', routes.comments.removeComment)

app.listen(3000)
