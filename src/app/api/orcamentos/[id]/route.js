import orcamentos from '@/data/orcamentos.json'; // Atualize o caminho conforme a estrutura do seu projeto

export async function GET(req, { params }) {
  const { id } = params;

  // Busca direta no objeto, já que as chaves são os IDs
  const dados = orcamentos[id];

  if (!dados) {
    return new Response(
      JSON.stringify({ error: 'Orçamento não encontrado.' }),
      {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  return new Response(JSON.stringify(dados), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });
}
