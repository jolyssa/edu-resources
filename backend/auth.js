const requireAuth = async (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }
    next();
  };
  
  const checkResourceOwnership = async (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }
  
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
  
    if (resource.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }
  
    next();
  };