import adminController from '../controllers/adminController.js';
import { Router } from 'express';
import { getAllUsers, getUserById } from '../controllers/userController.js';
import {
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} from '../controllers/bookController.js';
const router = Router();

// // POST /admin/status
// router.get('/status', status);

// // POST /admin/signin
// router.post('/signin', signin);

// // POST /admin/signup
// router.post('/signup', signup);

// // POST /admin/forgot
// router.post('/forgot', forgot);

// // POST /admin/reset/:token
// router.post('/reset/:token', reset);

// // POST /admin/reset/:token/confirm
// router.post('/reset/:token/confirm', confirmResetPassword);

// GET /admin/users
router.get('/users', getAllUsers);

// GET /admin/users/:id
router.get('/users/:id', getUserById);

// GET /admin/books
router.get('/books', getAllBooks);

// GET /admin/books/:id
router.get('/books/:id', getBookById);

// DELETE admin/books/:id
router.delete('/books/:id', deleteBook);

// PUT admin/books/:id
router.put('/books/:id', updateBook);

export default router;
