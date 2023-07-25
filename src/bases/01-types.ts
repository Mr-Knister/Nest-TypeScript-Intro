export let name:string = 'Cesar';
export const age:number = 33;
export const isValid:boolean = true;
name = 'Banina';

export const tempalteString:string = `Esto es un string
    multilinea
    que puede tener
    " dobles
    ' simples
    inyectar valores ${name}
    expresiones ${1+1}
    números: ${age}
    booleanos: ${isValid}
    funciones: ${Math.abs}
`;
// console.log(tempalteString);