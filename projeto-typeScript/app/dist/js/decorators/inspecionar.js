export function Inspecionar(target, propertyKey, descriptor) {
    const funcaoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`------ Metodo: ${propertyKey}`);
        console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
        const retorno = funcaoOriginal.apply(this, args);
        console.log(`------ Retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
