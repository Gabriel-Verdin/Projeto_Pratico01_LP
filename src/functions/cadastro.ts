import { titulos, autores, anos, paginas, lidos, avaliacoes } from '../data/biblioteca.js';
import { exibirBiblioteca } from './consulta.js';

import promptSync from 'prompt-sync';
const prompt = promptSync()

export function adicionarLivro(): void {
    console.log()
    const titulo = String(prompt("Digite o Título do Livro: "))
    const autor = String(prompt("Digite o Autor do Livro: "))
    const ano = Number(prompt("Digite o Ano do Livro: "))
    const pagina = Number(prompt("Digite as Páginas do Livro: "))

    // Validação de Título
    if (titulo.trim() === "") {
        console.log("\nErro: Título não pode estar vazio!")
        return
    }

    // Validação de Autor
    if (autor.trim() === "") {
        console.log("\nErro: Autor não pode estar vazio!")
        return
    }

    // Validação de Ano
    if (ano <= 0 || isNaN(ano)) {
        console.log("\nErro: Digite um ano válido")
    }

    // Validação de Página
    if (pagina <= 0 || isNaN(pagina)) {
        console.log("\nErro: Digite um número válido de páginas")
    }
    else {
        titulos.push(titulo)
        autores.push(autor)
        anos.push(ano)
        paginas.push(pagina)
        lidos.push(false)
        avaliacoes.push(0)

        console.log("\nLivro Adicionado com sucesso!")
    }
}

export function removerLivro(): void {
    console.log()
    exibirBiblioteca()

    console.log()
    const indice = Number(prompt("Qual livro deseja remover? ")) - 1

    // Validação do Índice
    if (isNaN(indice) || indice < 0 || indice >= titulos.length) {
        console.log("\nErro: Índice Inválido!")
        return
    }

    const livroRemovido = titulos[indice]

    titulos.splice(indice, 1)
    autores.splice(indice, 1)
    anos.splice(indice, 1)
    paginas.splice(indice, 1)
    lidos.splice(indice, 1)
    avaliacoes.splice(indice, 1)

    console.log(`\nLivro "${livroRemovido}" removido com sucesso`)
}