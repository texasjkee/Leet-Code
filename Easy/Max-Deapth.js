const maxDepth = function(root) {
  if (!root) return 0;
  const lHeight = maxDepth(root.left) + 1;
  const rHeight = maxDepth(root.right) + 1;
  return lHeight > rHeight ? lHeight : rHeight;
};