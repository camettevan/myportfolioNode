const express = require('express')
const router = express.Router()
const pagesController = require('../controllers/pagesController')
const projectsController = require('../controllers/projectsController')
const blogController = require('../controllers/blogController')


// Pages
router.get('/', pagesController.homePage)
router.get('/about', pagesController.about)
router.get('/contact', pagesController.contact)


// Projects
router.get('/projects', projectsController.index)
router.get('/projects/create', projectsController.create)
router.post('/projects', projectsController.store)
router.get('/projects/:title', projectsController.show)
router.get('/projects/:title/edit', projectsController.edit)
router.put('/projects/:title', projectsController.update)
router.delete('/projects/:title', projectsController.destroy)


// Blog
router.get('/blog', blogController.index)
router.get('/blog/create', blogController.create)
router.get('/blog/:slug', blogController.show)
router.post('/blog', blogController.store)
router.get('/blog/:slug/edit', blogController.edit)
router.put('/blog/:slug', blogController.update)
router.get('/blog/:slug/delete', blogController.destroy)
// router.delete('/blog/:slug', blogController.destroy)


// Admin
router.get('/admin', projectsController.index)


module.exports = router
