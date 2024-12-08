'/src/app/orcamentos/carlos/page.js'
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Orcamento = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-2xl rounded-lg border border-gray-200">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-teal-700 mb-2">🏰 ORÇAMENTO DE SERVIÇOS</h1>
        <p className="text-gray-600 text-lg">📅 Data: 7 de Dezembro de 2024</p>
      </header>

      <section className="mb-8">
        <p className="text-gray-700 text-lg">Cliente: <strong>Sr. Carlos</strong></p>
        <p className="text-gray-700 mt-2">
          Agradecemos a oportunidade de apresentar nosso orçamento para a realização dos serviços solicitados. Segue abaixo a proposta detalhada:
        </p>
      </section>

      <hr className="my-6" />

      <section>
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">1. Limpeza e Demarcação de Terreno</h2>

        <article className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-500 mb-2">1.1. Limpeza de Área, Corte de Árvores e Alinhamento</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Descrição do Serviço:</strong></li>
            <ul className="list-disc list-inside ml-6">
              <li>Limpeza de 250m² de área com remoção de mato.</li>
              <li>Corte de árvores de médio e grande porte (5 árvores).</li>
              <li>Alinhamento de mourões e instalação de 12m lineares de arame com tela.</li>
            </ul>
            <li><strong>Valor Total:</strong> R$ 2.990,00</li>
            <li><strong>Prazo Aproximado:</strong> 3 a 4 dias</li>
          </ul>
        </article>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">2. Contrapiso e Pisos em Áreas Diversas</h2>

        <article className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-500 mb-2">2.1. Calçadas e Varanda</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Descrição do Serviço:</strong></li>
            <ul className="list-disc list-inside ml-6">
              <li>Execução de contrapiso e instalação de piso em calçadas (8,58m², 2,25m² e 18m²).</li>
              <li>Instalação de piso na varanda coberta (8m²).</li>
            </ul>
            <li><strong>Valor da Mão de Obra:</strong> R$ 5.524,50</li>
            <li><strong>Materiais:</strong> Cimento e areia - R$ 329,00</li>
            <li><strong>Valor Total:</strong> R$ 5.853,50</li>
            <li><strong>Prazo Aproximado:</strong> 5 a 7 dias</li>
          </ul>
        </article>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">3. Contrapiso na Garagem</h2>

        <article className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-500 mb-2">3.1. Execução de Contrapiso</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Descrição do Serviço:</strong></li>
            <ul className="list-disc list-inside ml-6">
              <li>Execução de contrapiso na garagem (36m²).</li>
            </ul>
            <li><strong>Valor da Mão de Obra:</strong> R$ 2.300,00</li>
            <li><strong>Materiais:</strong> Cimento, areia, brita e malha de ferro - R$ 950,00</li>
            <li><strong>Valor Total:</strong> R$ 3.250,00</li>
            <li><strong>Prazo Aproximado:</strong> 2 a 3 dias</li>
          </ul>
        </article>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">4. Revestimento no Muro</h2>

        <article className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-500 mb-2">4.1. Colocação de Piso ou Pedra</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Descrição do Serviço:</strong></li>
            <ul className="list-disc list-inside ml-6">
              <li>Preparação e revestimento do muro lateral com piso ou pedra (20m²).</li>
            </ul>
            <li><strong>Valor Total:</strong> R$ 1.450,00</li>
            <li><strong>Prazo Aproximado:</strong> 2 a 3 dias</li>
          </ul>
        </article>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">5. Pintura Externa</h2>

        <article className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-500 mb-2">5.1. Pintura da Fachada</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Descrição do Serviço:</strong></li>
            <ul className="list-disc list-inside ml-6">
              <li>Pintura das paredes externas rebocadas (100m²).</li>
            </ul>
            <li><strong>Valor Total:</strong> R$ 2.200,00</li>
            <li><strong>Prazo Aproximado:</strong> 3 a 4 dias</li>
          </ul>
        </article>
      </section>

      <footer className="text-center mt-8 text-gray-600">
        <p>
          <strong>Atenciosamente,</strong>
          <br />
          Fernando Hoinaski<br />
          <a
            className="flex items-center justify-center mt-2 text-green-700 font-semibold hover:underline"
            href="https://wa.me/5548996273552"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2" />
            48 99627-3552
          </a>
        </p>
        <p className="mt-4 text-sm">
          Este orçamento tem caráter de proposta comercial e, após aprovação, um contrato formal será estabelecido entre as partes.
        </p>
      </footer>
    </div>
  );
};

export default Orcamento;
