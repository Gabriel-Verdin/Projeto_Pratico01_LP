import { titulos, autores, anos, paginas, lidos, avaliacoes } from '../data/biblioteca.js';

export function exibirBiblioteca(): void {
    console.log()
    console.log("=== MINHA BIBLIOTECA ===")
    titulos.forEach((titulo: string, indice: number) => {
        if (lidos[indice] === true) {
            console.log(`${indice + 1}. "${titulo}" (${anos[indice]}) - ${autores[indice]} - ${paginas[indice]} pag - LIDO (${avaliacoes[indice]}/5)`)
        }
        else {
            console.log(`${indice + 1}. "${titulo}" (${anos[indice]}) - ${autores[indice]} - ${paginas[indice]} pag - PENDENTE`)
        }
    });
}

export function buscarPorTitulo(termo: string): number[] {
    const resultados: number[] = []

    titulos.forEach((titulo: string, indice: number) => {
        if (titulo.toLowerCase().includes(termo.toLowerCase())){
            resultados.push(indice)
        }
    });

    return resultados;
}

export function listarAutor(autor: string): string[] {

    return autores
        .map((nomeAutor, indice) => ({nomeAutor, titulo: titulos[indice]! }))
        .filter(item => item.nomeAutor.toLowerCase() === autor.toLowerCase())
        .map(item => item.titulo);
}