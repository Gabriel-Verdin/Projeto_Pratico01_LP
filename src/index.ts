import { exibirBiblioteca, buscarPorTitulo, listarAutor } from "./functions/consulta.js"
import { marcarComoLido, listarLidos, listarPendentes } from "./functions/leitura.js";
import { adicionarLivro, removerLivro } from "./functions/cadastro.js"
import { totalLivros, percentualLidos, mediaAvaliacoes, livroMelhorAvaliado, totalPaginasLidas } from "./functions/estatisticas.js";
import { autores, titulos } from "./data/biblioteca.js";
import { classificacaoPorDecada } from "./functions/classificacao.js";

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
    console.log("[6] - Marcar como Lido")
    console.log("[7] - Listar Lidos")
    console.log("[8] - Listar Pendentes")
    console.log("[9] - Visualizar Estatísticas ")
    console.log("[10] - Classificação por Década")
    console.log("[11] - Resumo Geral")
    console.log("[12] - Sair")
    console.log()
    opcao = Number(prompt("Escolha um Opção: "))
}

menu()

while (opcao != 12) {
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
                console.log()
                console.log("===== LIVROS ENCONTRADOS =====")
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
                console.log(`\n===== LIVROS DE ${autor} =====`);
                livrosDoAutor.forEach(titulo => console.log(`- ${titulo}`));
            } else {
                console.log(`\nNenhum livro encontrado para o autor "${autor}".`);
            }
            break;
        case 6:
            marcarComoLido()
            break;
        case 7:
            console.log()
            console.log("===== LIVROS LIDOS =====")
            listarLidos()
            break;
        case 8:
            console.log()
            console.log("===== LIVROS PENDENTES =====")
            listarPendentes()
            break
        case 9:
            console.log()
            console.log("===== ESTATÍSTICAS =====")
            console.log(`Total de Livros: ${totalLivros()}`)
            console.log(percentualLidos())
            console.log(mediaAvaliacoes())
            console.log(livroMelhorAvaliado())
            console.log(totalPaginasLidas())
            break;
        case 10:
            console.log()
            console.log("===== CLASSIFICAÇÃO POR DÉCADA =====")
            console.log(classificacaoPorDecada())
            break;
        case 11:
            exibirBiblioteca()

            console.log()
            console.log("===== ESTATÍSTICAS =====")
            console.log(`Total de Livros: ${totalLivros()}`)
            console.log(percentualLidos())
            console.log(mediaAvaliacoes())
            console.log(livroMelhorAvaliado())
            console.log(totalPaginasLidas())

            console.log()
            console.log("===== CLASSIFICAÇÃO POR DÉCADA =====")
            console.log(classificacaoPorDecada())
            break;
    }
    console.log()
    const escolha: string = String(prompt("Deseja Continuar? (S / N) "))
    console.log()

    if (escolha === 'n' || escolha === 'N') {
        opcao = 12
    } else {
        menu()
    }
}
console.log("Saindo....")