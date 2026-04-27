import { titulos, autores, anos, paginas, lidos, avaliacoes } from '../data/biblioteca.js';

export function totalLivros(): number {
    return titulos.length
}

export function percentualLidos(): string {
    const total = lidos.length
    const lidosCount = lidos.filter(lido => lido).length
    const percentual = total > 0 ? (lidosCount / total) * 100 : 0;
 
    return `Livros Lidos: ${lidosCount} (${percentual.toFixed(2)}%)`;
}

export function mediaAvaliacoes(): string {
    const avaliados = avaliacoes.filter(avaliacao => avaliacao > 0);
    const soma = avaliados.reduce((acumulo, valorAtual) => acumulo + valorAtual, 0);
    const media = avaliados.length > 0 ? soma / avaliados.length : 0;

    return `Média de Avaliações: ${media.toFixed(2)}`;
}

export function livroMelhorAvaliado(): string {
    const max = Math.max(...avaliacoes);
    const indice = avaliacoes.indexOf(max);

    return max > 0 ? `Livro Melhor Avaliado: ${titulos[indice]} (${max}/5)` : "Nenhum livro avaliado ainda.";
}

export function totalPaginasLidas(): string {
    const soma = paginas.reduce((acumulo, valorAtual, i) => acumulo + (lidos[i] ? valorAtual : 0), 0);
    return `Total de Páginas Lidas: ${soma}`;
}