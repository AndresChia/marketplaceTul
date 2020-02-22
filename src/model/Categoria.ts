

interface listaDato {
    nombre: string;
    descripcion: string;
    unidadesDisponibles: number;
    precio: number;
}

export interface Categoria {
    nombre: String;
    imagen: string;
    lista?: listaDato[];
}