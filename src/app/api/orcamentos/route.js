import orcamentos from '@/data/orcamentos.json'; // Certifique-se de que o caminho está correto

export async function GET(req) {
  // Gera a lista com o nome do cliente e o link baseado no ID
  const listaDeOrcamentos = Object.keys(orcamentos).map((id) => ({
    nome: orcamentos[id].cliente.nome,
    link: `/orcamentos/${id}` // Gera o link usando o ID
  }));

  return new Response(JSON.stringify(listaDeOrcamentos), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });
}
