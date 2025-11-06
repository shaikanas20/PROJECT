exports.protect = (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
  next();
};

exports.instructorOnly = (req, res, next) => {
  if (req.user.role !== 'instructor' && req.user.role !== 'admin')
    return res.status(403).json({ message: 'Forbidden: Instructors only' });
  next();
};

exports.adminOnly = (req, res, next) => {
  if (req.user.role !== 'admin')
    return res.status(403).json({ message: 'Forbidden: Admins only' });
  next();
};
