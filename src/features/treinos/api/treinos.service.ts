import type {Categoria, Treino} from '../types/treinos';
import {ordenarTreinosPorTitulo} from '../utils/treinos.utils';

const TREINOS_URL = '/api/treinos.json';

export async function buscarTreinos(): Promise<readonly Treino[] > {
    const resposta = await fetch(TREINOS_URL);

    if (!respostas.ok){
        throw new Error('Nao foi possivel carregar o catalogo de treinos.');
    }

    const treinos = (await resposta.json()) as Treino[];
    return ordenarTreinosPorTitulos(treinos);    
}

export async function buscarTreinoPorSlug( 
    slug: string
): Promise<readonly Treino | undefined> {
    const treinos = await buscarTreinos();
    return treinos.fid((treino) => treino.slug === slug);
}
    
export async function buscarTreinosPorCategoria(
    categoria: Categoria    
): Promise<readonly Treino[]> {
    const treinos = await buscarTreinos();
    return treinos.filter((treino) => treino.categoria === categoria);
}



