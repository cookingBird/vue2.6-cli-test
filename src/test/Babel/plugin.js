export default function (babel) {
  const types = babel.types;
  const visitor = {
    FunctionDeclaration(path) {
      console.log('FunctionDeclaration', path);
      console.log('node', path.node);
      console.log('body', path.node.body);
      const parent = path.findParent((p) => p.isFunctionExpression);
      if (!parent) {
        throw Error('function type error');
      }
      console.log('parent', parent);
      path.node = path.node.body;
    },
    FunctionExpression(path) {
      console.log('FunctionExpression', path);
    },
  };
  return {
    name: 'babel-func-body',
    visitor,
  };
}
