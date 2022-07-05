export function Inspecionar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const funcaoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`------ Metodo: ${propertyKey}`);
        console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
        const retorno = funcaoOriginal.apply(this, args);
        console.log(`------ Retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    }
    return descriptor
}