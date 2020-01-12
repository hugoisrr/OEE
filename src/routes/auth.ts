import { Router } from 'express';
const router: Router = Router();
import { TokenValidation } from '../libs/verifyToken';

import { signup, signin, profile } from '../controllers/auth.controller';

// Open Routes
router.post('/signup', signup);
router.post('/signin', signin);

// Private Routes
router.get('/profile', TokenValidation, profile);

export default router;
