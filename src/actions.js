export const inc = () =>  ({ type: 'INC' })             // action creator - альтернативный вариант использования
export const dec = () =>  ({ type: 'DEC' })   
export const rnd = (value) => ({type: "RND", payload: Math.floor(Math.random() * 10)}); 