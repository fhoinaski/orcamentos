'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Orcamentos() {
  const [orcamentos, setOrcamentos] = useState([]); // Estado para armazenar os orçamentos
  const [loading, setLoading] = useState(true); // Estado para controle de carregamento

  useEffect(() => {
    async function fetchOrcamentos() {
      try {
        const res = await fetch('/api/orcamentos'); // Requisição para a nova rota de listagem
        if (!res.ok) throw new Error('Erro ao buscar orçamentos');
        const data = await res.json();
        setOrcamentos(data); // Define os orçamentos no estado
      } catch (error) {
        console.error('Erro ao carregar orçamentos:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchOrcamentos();
  }, []);

  if (loading) {
    return <div>Carregando orçamentos...</div>;
  }

  if (!orcamentos.length) {
    return <div>Nenhum orçamento encontrado.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Lista de Orçamentos</h1>
      <ul className="space-y-4">
        {orcamentos.map((orcamento, index) => (
          <li key={index}>
            <Link
              href={orcamento.link}
              className="text-teal-600 hover:underline"
            >
              {orcamento.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
