'use client';
import React, { useState, useEffect } from 'react';
import Orcamento from '../../../components/Orcamento';
import Loading from '../../../components/Loading';
import ImprovedGerarPDF from '@/components/ImprovedGerarPDF';
import Header from '@/components/Header';

export default function OrcamentoPage({ params }) {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/orcamentos/${params.id}`);
        if (!res.ok) throw new Error('Erro ao buscar dados');
        const data = await res.json();
        setDados(data);
      } catch (error) {
        console.error('Erro ao carregar o orçamento:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [params.id]);

  if (loading) return <Loading />;
  if (!dados) return <div>Orçamento não encontrado.</div>;

  return (
    <div>
      {/* <Header companyName={dados.companyName} userName={dados.userName} relatorio={dados} /> */}
      {/* <nav className='flex justify-end w-full h-10 my-4'>
      <div className='flex justify-center items-center bg-slate-200 rounded-lg p-2 '>
        <ImprovedGerarPDF dados={dados} />
        <p>
          Gerar PDF
        </p>
      </div>
      </nav> */}
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="container mx-auto max-w-6xl">
          <Orcamento {...dados} />
        </div>
      </div>
    </div>
  );
}
