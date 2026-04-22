const titulos: string[] = []
const autores: string[] = []
const anos: number[] = []
const paginas: number[] = []
const lido: boolean[] = []
const avaliacoes: number[] = [] // 0 se não lido, 1 a 5 se lido

titulos.push(
    'O Hobbit',
    'Clean Code',
    '1984',
    'Dom Casmurro',
    'O Nome do Vento'
);

autores.push(
    'J.R.R. Tolkien',
    'Robert C. Martin',
    'George Orwell',
    'Machado de Assis',
    'Patrick Rothfuss'
);

anos.push(1937, 2008, 1949, 1899, 2007);
paginas.push(310, 464, 328, 256, 662);
lido.push(true, true, false, true, false);
avaliacoes.push(5, 4, 0, 5, 0)

function exibirBiblioteca(): void {
    console.log("=== MINHA BIBLIOTECA ===")
    titulos.forEach((titulo: string, indice: number) => {
        if (lido[indice] === true) {
            console.log(`${indice + 1}. "${titulo}" (${anos[indice]}) - ${autores[indice]} - ${paginas[indice]} pag - LIDO (${avaliacoes[indice]}/5)`)
        }
        else {
            console.log(`${indice + 1}. "${titulo}" (${anos[indice]}) - ${autores[indice]} - ${paginas[indice]} pag - PENDENTE`)
        }
    });
}

console.log(exibirBiblioteca())