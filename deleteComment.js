var s = `

let a = 1;
/* first line of comment
   second line of comment */
// asdsds

console.log('done')
`;
let a = s.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, '');

console.log(a);
