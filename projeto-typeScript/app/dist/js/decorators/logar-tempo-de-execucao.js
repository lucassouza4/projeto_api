export function LogarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            if (!emSegundos)
                console.log(`Tempo de execução de '${propertyKey}' em milisegundos: ${t2 - t1}`);
            else
                console.log(`Tempo de execução de '${propertyKey}' em segundos: ${(t2 - t1) / 1000}`);
            return retorno;
        };
        return descriptor;
    };
}
