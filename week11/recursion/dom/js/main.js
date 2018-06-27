
// Homework: write this function

const traverseDOM = ( node, depth=0 ) => {
  const indent = Array(depth+1).join('  ');  // ruby: '  ' * n
  for( let i = 0; i < node.children.length; i++ ){
    console.log(`${ indent }${ node.nodeName }: ${ node.className }`);
  }
  for( let i = 0; i < node.children.length; i++ ){
    traverseDOM( node.children[i], depth+1 );
  }
};  

traverseDOM( document.body );


// Bonus: try a non-recursive solution... nasty
