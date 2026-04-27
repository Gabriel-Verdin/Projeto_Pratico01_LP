import { exibirBiblioteca, buscarPorTitulo, listarAutor } from "./functions/consulta.js"
import { adicionarLivro, removerLivro } from "./functions/cadastro.js"
import { autores, titulos } from "./data/biblioteca.js";

import promptSync from 'prompt-sync';
const prompt = promptSync()

let opcao: Number = 0;

function menu(): void {
    console.log("===== MENU MINHA BIBLIOTECA =====")
    console.log("[1] - Exibir Biblioteca")
    console.log("[2] - Adicionar Livro")
    console.log("[3] - Remover Livro")
    console.log("[4] - Buscar por Título")
    console.log("[5] - Listar por Autor")
    //console.log("[6] - ")
    //console.log("[7] - ")
    //console.log("[8] - ")
    //console.log("[9] - ")
    //console.log("[10] -")
    console.log("[11] - Sair")
    console.log()
    opcao = Number(prompt("Escolha um Opção: "))
}

menu()

while (opcao != 11) {
    switch(opcao) {
        case 1:
            exibirBiblioteca();
            break;
        case 2:
            adicionarLivro();
            break;
        case 3:
            removerLivro();
            break;
        case 4:
            const termo = String(prompt("Digite o Título do Livro: ")) 
            const resultados = buscarPorTitulo(termo)
            buscarPorTitulo(termo)

            if (resultados.length > 0) {
                console.log("Livros Encontrados: ")
                resultados.forEach(indice => {
                console.log(`- ${titulos[indice]} (${autores[indice]})`)
            });
            } else {
                console.log("Nenhum livro encontrado com esse título!")
            }
            break;
        case 5:
            const autor = String(prompt("Digite o Nome do Autor: "))
            const livrosDoAutor = listarAutor(autor)

            listarAutor(autor)

            if (livrosDoAutor.length > 0) {
                console.log(`\nLivros de ${autor}:`);
                livrosDoAutor.forEach(titulo => console.log(`- ${titulo}`));
            } else {
                console.log(`\nNenhum livro encontrado para o autor "${autor}".`);
    }
    }
    console.log()
    const escolha: string = String(prompt("Deseja Continuar? (S / N) "))

    if (escolha === 'n' || escolha === 'N') {
        opcao = 11
    } else {
        menu()
    }
}
console.log("Saindo....")