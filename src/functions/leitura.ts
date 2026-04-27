import { titulos, autores, anos, paginas, lidos, avaliacoes } from '../data/biblioteca.js';
import { exibirBiblioteca } from './consulta.js';

import promptSync from 'prompt-sync';
const prompt = promptSync()

export function marcarComoLido(): void {
    exibirBiblioteca()
    console.log()
    const indice = Number(prompt("Escolha o Livro Para Marcar: ")) -1

    if (lidos[indice] === false) {
        lidos[indice] = true
        console.log()
        console.log("Livro marcado com sucesso!")
    } else {
        console.log()
        console.log("Livro já marcado como lido!")
        lidos[indice] = false
    }

    if (lidos[indice] === true) {
        console.log()
        const avaliacao = Number(prompt("Qual avaliação para o livro lido: "))

        if (avaliacao < 0 || avaliacao > 5) {
            console.log()
            console.log("Digite uma avaliação válida!")
        }
        else {
            avaliacoes[indice] = avaliacao
            console.log()
            console.log("Livro Avaliado com sucesso!")
        }
    }

    
}

export function listarLidos(): void {
    titulos.forEach((titulo: string, indice: number) => {
        if(lidos[indice] === true) {
            console.log(`${indice + 1}. "${titulo}" (${anos[indice]}) - ${autores[indice]} - ${paginas[indice]} pag - LIDO (${avaliacoes[indice]}/5)`)
        } 
    });
}

export function listarPendentes(): void {
    titulos.forEach((titulo: string, indice: number) => {
        if(lidos[indice] === false) {
            console.log(`${indice + 1}. "${titulo}" (${anos[indice]}) - ${autores[indice]} - ${paginas[indice]} pag - PENDENTE`)
        }
    })
} 