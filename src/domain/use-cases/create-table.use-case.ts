interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase{
    constructor() {}

    execute({ base, limit = 10 }: CreateTableOptions) {
        let imprimir: string = `=====================\n     Tabla del ${base}\n=====================\n\n`;
        for (let i = 1; i <= limit; i++) {
            imprimir += `${base} x ${i} = ${base * i}\n`;
        }
        return imprimir;
    }
}
