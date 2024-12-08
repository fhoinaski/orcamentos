import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Orcamento = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-2xl rounded-lg border border-gray-200">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-teal-700 mb-2">🏰 ORÇAMENTO DE SERVIÇOS</h1>
        <p className="text-gray-600 text-lg">📅 Data: 11 de Novembro de 2024</p>
      </header>

      <section className="mb-8">
        <p className="text-gray-700 text-lg">Cliente: <strong>Michèle</strong></p>
        <p className="text-gray-700 mt-2">
          Agradecemos a oportunidade de apresentar nosso orçamento para a realização dos serviços solicitados. Segue abaixo a proposta detalhada:
        </p>
      </section>

      <hr className="my-6" />

      <section>
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">1. Instalações e Adaptações</h2>

        <article className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-500 mb-2">1.1. Instalação da Porta do Banheiro</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Descrição do Serviço:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Remoção e instalação completa de uma nova porta no banheiro, já fornecida pelo cliente.</li>
                <li>Ajustes no batente para acomodação da nova porta.</li>
                <li>Materiais necessários como dobradiças, fechaduras e outros serão fornecidos pelo cliente.</li>
              </ul>
            </li>
            <li><strong>Valor da Mão de Obra:</strong> R$ 250,00</li>
            <li><strong>Prazo Aproximado:</strong> Meio dia</li>
          </ul>
        </article>

        <article className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-500 mb-2">1.2. Instalação da Porta do Quarto com Forra Externa</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Descrição do Serviço:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Instalação da forra externa, já fornecida pelo cliente.</li>
                <li>Realocação da tomada elétrica para adequação ao novo layout.</li>
                <li>Instalação da porta de correr, já fornecida pelo cliente.</li>
                <li>Materiais necessários como dobradiças, fechaduras, fios, caixa de passagem e outros serão fornecidos pelo cliente.</li>
              </ul>
            </li>
            <li><strong>Valor da Mão de Obra:</strong> R$ 650,00</li>
            <li><strong>Prazo Aproximado:</strong> 1 dia</li>
          </ul>
        </article>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">2. Recuperação Estrutural</h2>
        <article className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-500 mb-2">2.1. Tratamento de Umidade em Paredes Internas</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Descrição do Serviço:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Remoção completa do reboco existente nas áreas afetadas pela umidade.</li>
                <li>Realização de corte horizontal na base da parede para interromper a ascensão capilar de umidade proveniente das vigas baldrame.</li>
                <li>Preenchimento do corte com massa forte adicionada de impermeabilizante.</li>
                <li>Reaplicação de reboco com argamassa impermeável.</li>
                <li>Correção de rachaduras nas paredes existentes.</li>
              </ul>
            </li>
            <li><strong>Valor (Materiais e Mão de Obra Inclusos):</strong> R$ 8.900,00</li>
            <li><strong>Prazo Aproximado:</strong> 7 a 10 dias</li>
          </ul>
        </article>

        <article className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-500 mb-2">2.2. Recuperação do Teto</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Descrição do Serviço:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Identificação e tratamento das áreas comprometidas do teto.</li>
                <li>Remoção das partes danificadas e limpeza das armaduras expostas.</li>
                <li>Aplicação de conversor de ferrugem nas armaduras para prevenir corrosão futura.</li>
                <li>Reconstrução do teto com reboco corretivo nas áreas danificadas.</li>
              </ul>
            </li>
            <li><strong>Valor (Materiais e Mão de Obra Inclusos):</strong> R$ 6.500,00</li>
            <li><strong>Prazo Aproximado:</strong> 7 a 10 dias</li>
          </ul>
        </article>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">3. Modificações Estruturais</h2>
        <article className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-500 mb-2">3.1. Fechamento de Janela da Cozinha</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Descrição do Serviço:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Fechamento da abertura da janela da cozinha.</li>
                <li>Acabamento interno e externo com reboco.</li>
              </ul>
            </li>
            <li><strong>Valor (Materiais e Mão de Obra Inclusos):</strong> R$ 980,00</li>
            <li><strong>Prazo Aproximado:</strong> 1 dia</li>
          </ul>
        </article>

        <article className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-500 mb-2">3.2. Abertura de Nova Porta na Área da Sala</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Descrição do Serviço:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Demolição controlada para abertura da nova porta, garantindo a integridade estrutural.</li>
                <li>Instalação de verga para suporte adequado.</li>
                <li>Requadre e acabamento da nova abertura.</li>
              </ul>
            </li>
            <li><strong>Valor (Materiais e Mão de Obra Inclusos):</strong> R$ 3.240,00</li>
            <li><strong>Prazo Aproximado:</strong> 3 a 4 dias</li>
          </ul>
        </article>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">4. Construção de Muro</h2>
        <article className="mb-6">
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Descrição do Serviço:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Construção de muro na área externa conforme especificações solicitadas.</li>
                <li>Utilização de blocos estruturais, vergalhões de ferro para armação.</li>
                <li>Execução de fundação adequada para estabilidade e durabilidade, utilizando blocos canaletas para vigas baldrame e espigões para sustentação e estabilidade.</li>
                <li>Acabamento com juntas rebaixadas.</li>
              </ul>
            </li>
            <li><strong>Materiais:</strong> R$ 2.000,00 (cimento, argamassa, blocos, ferro, brita, areia; valores orçados no Material de Construção Quevedo)</li>
            <li><strong>Valor da Mão de Obra:</strong> R$ 5.600,00</li>
            <li><strong>Valor Total:</strong> R$ 7.600,00</li>
            <li><strong>Prazo Aproximado:</strong> 7 a 10 dias</li>
          </ul>
        </article>
      </section>

      <section className="bg-teal-50 p-6 mt-8 rounded-lg">
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">Formas de Pagamento</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Opção 1:</strong> 50% no início do serviço e 50% no final.</li>
          <li><strong>Opção 2:</strong> Parcelamento em até 12x sem juros no cartão de crédito.</li>
          <li><strong>Desconto:</strong> 5% de desconto para pagamento à vista em dinheiro.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">Garantias e Observações</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Garantia de 6 meses para serviços de recuperação estrutural.</li>
          <li>Suporte pós-obra para ajustes necessários.</li>
          <li>Orçamento sujeito a ajustes após avaliação presencial.</li>
          <li>Execução seguindo rigorosos padrões de segurança e qualidade.</li>
          <li>Serviços adicionais serão previamente acordados.</li>
          <li>Os prazos podem variar de acordo com clima e disponibilidade de materiais.</li>
        </ul>
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