import React from 'react';

const Michele = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">🏰 ORÇAMENTO DE SERVIÇOS</h1>
      <p className="text-gray-700"><strong>📅 Data:</strong> 11 de Novembro de 2024</p>
      <hr className="my-4" />
      <p className="text-gray-700"><strong>Cliente:</strong> Michèle</p>
      <p className="text-gray-700 mb-4">Agradeço a oportunidade de apresentar nosso orçamento para a realização dos serviços solicitados. Segue abaixo a proposta detalhada:</p>
      <hr className="my-4" />
      
      <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">1. Instalações e Adaptações</h2>
      <h3 className="text-xl font-semibold text-teal-500 mt-4 mb-2">1.1. Instalação da Porta do Banheiro</h3>
      <ul className="list-disc list-inside mb-4">
        <li className="text-gray-700"><strong>Descrição do Serviço:</strong>
          <ul className="list-disc list-inside ml-6">
            <li>Remoção e instalação completa de uma nova porta no banheiro, já fornecida pelo cliente.</li>
            <li>Ajustes no batente para acomodação da nova porta.</li>
            <li>Materiais necessários como dobradiças, fechaduras e outros serão fornecidos pelo cliente.</li>
          </ul>
        </li>
        <li className="text-gray-700"><strong>Valor da Mão de Obra:</strong> R$ 250,00</li>
        <li className="text-gray-700"><strong>Prazo Aproximado:</strong> Meio dia</li>
      </ul>

      <h3 className="text-xl font-semibold text-teal-500 mt-4 mb-2">1.2. Instalação da Porta do Quarto com Forra Externa</h3>
      <ul className="list-disc list-inside mb-4">
        <li className="text-gray-700"><strong>Descrição do Serviço:</strong>
          <ul className="list-disc list-inside ml-6">
            <li>Instalação da forra externa, já fornecida pelo cliente.</li>
            <li>Realocação da tomada elétrica para adequação ao novo layout.</li>
            <li>Instalação da porta de correr, já fornecida pelo cliente.</li>
            <li>Materiais necessários como dobradiças, fechaduras, fios, caixa de passagem e outros serão fornecidos pelo cliente.</li>
          </ul>
        </li>
        <li className="text-gray-700"><strong>Valor da Mão de Obra:</strong> R$ 650,00</li>
        <li className="text-gray-700"><strong>Prazo Aproximado:</strong> 1 dia</li>
      </ul>

      <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">2. Recuperação Estrutural</h2>
      <h3 className="text-xl font-semibold text-teal-500 mt-4 mb-2">2.1. Tratamento de Umidade em Paredes Internas</h3>
      <ul className="list-disc list-inside mb-4">
        <li className="text-gray-700"><strong>Descrição do Serviço:</strong>
          <ul className="list-disc list-inside ml-6">
            <li>Remoção completa do reboco existente nas áreas afetadas pela umidade.</li>
            <li>Realização de corte horizontal na base da parede (cerca de 5 a 10 cm) para interromper a ascensão capilar de umidade proveniente das vigas baldrame.</li>
            <li>Preenchimento do corte com massa forte adicionada de impermeabilizante.</li>
            <li>Reaplicação de reboco com argamassa impermeável.</li>
            <li>Correção de rachaduras nas paredes existentes.</li>
          </ul>
        </li>
        <li className="text-gray-700"><strong>Valor (Materiais e Mão de Obra Inclusos):</strong> R$ 8.900,00</li>
        <li className="text-gray-700"><strong>Prazo Aproximado:</strong> 7 a 10 dias</li>
      </ul>

      <h3 className="text-xl font-semibold text-teal-500 mt-4 mb-2">2.2. Recuperação do Teto</h3>
      <ul className="list-disc list-inside mb-4">
        <li className="text-gray-700"><strong>Descrição do Serviço:</strong>
          <ul className="list-disc list-inside ml-6">
            <li>Identificação e tratamento das áreas comprometidas do teto.</li>
            <li>Remoção das partes danificadas e limpeza das armaduras expostas.</li>
            <li>Aplicação de conversor de ferrugem nas armaduras para prevenir corrosão futura.</li>
            <li>Reconstrução do teto com reboco corretivo nas áreas danificadas.</li>
          </ul>
        </li>
        <li className="text-gray-700"><strong>Valor (Materiais e Mão de Obra Inclusos):</strong> R$ 6.500,00</li>
        <li className="text-gray-700"><strong>Prazo Aproximado:</strong> 7 a 10 dias</li>
      </ul>

      <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">3. Modificações Estruturais</h2>
      <h3 className="text-xl font-semibold text-teal-500 mt-4 mb-2">3.1. Fechamento de Janela da Cozinha</h3>
      <ul className="list-disc list-inside mb-4">
        <li className="text-gray-700"><strong>Descrição do Serviço:</strong>
          <ul className="list-disc list-inside ml-6">
            <li>Fechamento da abertura da janela da cozinha.</li>
            <li>Acabamento interno e externo com reboco.</li>
          </ul>
        </li>
        <li className="text-gray-700"><strong>Valor (Materiais e Mão de Obra Inclusos):</strong> R$ 980,00</li>
        <li className="text-gray-700"><strong>Prazo Aproximado:</strong> 1 dia</li>
      </ul>

      <h3 className="text-xl font-semibold text-teal-500 mt-4 mb-2">3.2. Abertura de Nova Porta na Área da Sala</h3>
      <ul className="list-disc list-inside mb-4">
        <li className="text-gray-700"><strong>Descrição do Serviço:</strong>
          <ul className="list-disc list-inside ml-6">
            <li>Demolição controlada para abertura da nova porta, garantindo a integridade estrutural.</li>
            <li>Instalação de verga para suporte adequado.</li>
            <li>Requadre e acabamento da nova abertura.</li>
          </ul>
        </li>
        <li className="text-gray-700"><strong>Valor (Materiais e Mão de Obra Inclusos):</strong> R$ 3.240,00</li>
        <li className="text-gray-700"><strong>Prazo Aproximado:</strong> 3 a 4 dias</li>
      </ul>

      <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">4. Construção de Muro</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="text-gray-700"><strong>Descrição do Serviço:</strong>
          <ul className="list-disc list-inside ml-6">
            <li>Construção de muro na área externa conforme especificações solicitadas.</li>
            <li>Utilização de blocos estruturais, vergalhões de ferro para armação.</li>
            <li>Execução de fundação adequada para estabilidade e durabilidade, utilizando blocos canaletas para vigas baldrame e espigões para sustentação e estabilidade.</li>
            <li>Acabamento com juntas rebaixadas.</li>
          </ul>
        </li>
        <li className="text-gray-700"><strong>Materiais:</strong> R$ 2.000,00 (cimento, argamassa, blocos, ferro, brita, areia; valores orçados no Material de Construção Quevedo)</li>
        <li className="text-gray-700"><strong>Valor da Mão de Obra:</strong> R$ 5.600,00</li>
        <li className="text-gray-700"><strong>Valor Total:</strong> R$ 7.600,00</li>
        <li className="text-gray-700"><strong>Prazo Aproximado:</strong> 7 a 10 dias</li>
      </ul>

      <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">5. Pintura Externa Completa</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="text-gray-700"><strong>Descrição do Serviço:</strong>
          <ul className="list-disc list-inside ml-6">
            <li>Preparação das superfícies externas com limpeza, lixamento e correção de imperfeições.</li>
            <li>Aplicação de fundo preparador para melhor aderência da tinta e maior durabilidade.</li>
            <li>Pintura com tinta escolhida pelo cliente.</li>
            <li>Proteção e isolamento de áreas não pintáveis para evitar respingos.</li>
          </ul>
        </li>
        <li className="text-gray-700"><strong>Valor da Mão de Obra:</strong> R$ 9.700,00</li>
        <li className="text-gray-700"><strong>Prazo Aproximado:</strong> 5 a 7 dias</li>
      </ul>

      <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">Formas de Pagamento</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="text-gray-700"><strong>Opção 1:</strong> 50% no início do serviço e 50% no final.</li>
        <li className="text-gray-700"><strong>Opção 2:</strong> Parcelamento em até 12x sem juros no cartão de crédito.</li>
        <li className="text-gray-700"><strong>Desconto:</strong> 5% de desconto para pagamento à vista em dinheiro.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">Prazo Total Estimado para Conclusão dos Serviços</h2>
      <p className="text-gray-700 mb-4">20 a 30 dias, considerando os prazos individuais e possíveis sobreposições.</p>

      <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">Validade do Orçamento</h2>
      <p className="text-gray-700 mb-4">Este orçamento é válido por 30 dias a partir da data de emissão.</p>

      <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">Diferenciais do Nosso Serviço</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="text-gray-700">Utilização de materiais de alta qualidade, garantindo a durabilidade dos serviços.</li>
        <li className="text-gray-700">Garantia de execução conforme as normas técnicas vigentes.</li>
        <li className="text-gray-700">Limpeza e organização do local após a conclusão dos serviços.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">Garantia dos Serviços</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="text-gray-700">Oferecemos garantia de 6 meses para os serviços de recuperação estrutural.</li>
        <li className="text-gray-700">Suporte pós-obra para eventuais ajustes necessários.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">Observações Importantes</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="text-gray-700">O orçamento está sujeito a pequenos ajustes após uma avaliação presencial detalhada.</li>
        <li className="text-gray-700">Todos os serviços serão executados seguindo rigorosos padrões de segurança e qualidade.</li>
        <li className="text-gray-700">Eventuais serviços adicionais serão previamente acordados com o cliente.</li>
        <li className="text-gray-700">Os prazos podem variar de acordo com as condições climáticas e disponibilidade de materiais.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">Próximos Passos</h2>
      <ol className="list-decimal list-inside mb-4 ml-6">
        <li className="text-gray-700"><strong>Análise do Orçamento:</strong> Reserve um tempo para revisar todas as informações.</li>
        <li className="text-gray-700"><strong>Alinhamento de Detalhes:</strong> Definição de cronograma e ajustes finais.</li>
        <li className="text-gray-700"><strong>Início dos Serviços:</strong> Programação do início das atividades conforme sua disponibilidade.</li>
      </ol>

      <p className="text-gray-700 mb-6">Estamos prontos para transformar seu espaço com qualidade e profissionalismo!</p>

      <p className="text-gray-700 mb-4"><strong>Atenciosamente,</strong><br />
        Fernando Hoinaski<br />
        📞 +55 48 99627-3552<br />
        Disponível para contato de segunda a sexta, das 8h às 18h.</p>

      <hr className="my-4" />
      <p className="text-gray-700"><strong>Cláusula Legal:</strong><br />
        Este orçamento tem caráter de proposta comercial e, após a aprovação, um contrato formal será estabelecido entre as partes.</p>
    </div>
  );
};

export default Michele;
