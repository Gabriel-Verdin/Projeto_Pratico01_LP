import { titulos, autores, anos, paginas, lidos, avaliacoes } from '../data/biblioteca.js';

export function classificacaoPorDecada(): string {
    // cria um mapa { década: [livros] }
    const decadas: Record<string, string[]> = {};

    anos.forEach((ano, indice) => {
    const decada = Math.floor(ano / 10) * 10; // ex: 1997 → 1990
    if (!decadas[decada]) {
        decadas[decada] = [];
    }
        decadas[decada].push(titulos[indice]!);
    });

    // monta saída formatada
    let resultado = "Classificação por Década:\n";
    for (const decada in decadas) {
        resultado += `${decada}s: ${decadas[decada]!.length} livros\n`;
        decadas[decada]!.forEach(titulo => {
        resultado += `   - ${titulo}\n`;
        });
    }

  return resultado;
}