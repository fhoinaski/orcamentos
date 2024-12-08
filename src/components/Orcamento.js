import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Info, Calendar, User, CheckCircle2 } from 'lucide-react';


const BudgetAnimation = {
  container: {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        delayChildren: 0.2,
        staggerChildren: 0.1 
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  }
};

const formatCurrency = (value) => {
  // Converte o valor para número, lidando com string e número
  const numValue = typeof value === 'string' 
    ? parseFloat(value.replace(',', '.')) 
    : value;

  // Verifica se o valor é um número válido
  if (isNaN(numValue)) return 'R$ 0,00';

  // Formata para moeda brasileira
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(numValue);
};

const Orcamento = ({ 
  cliente, 
  data, 
  servicos,
  contato 
}) => {
  const totalOrcamento = useMemo(() => {
    return servicos.reduce((total, servico) => {
      // Lida com diferentes estruturas de detalhes
      const servicoTotal = servico.detalhes 
        ? (Array.isArray(servico.detalhes)
            ? servico.detalhes.reduce((subtotal, detalhe) => {
                // Tenta pegar valorTotal de diferentes formas
                const valorTotal = detalhe.valorTotal 
                  ? (typeof detalhe.valorTotal === 'string'
                      ? parseFloat(detalhe.valorTotal.replace(',', '.'))
                      : detalhe.valorTotal)
                  : 0;
                return subtotal + valorTotal;
              }, 0)
            : (parseFloat(servico.detalhes.valorTotal || 0)))
        : 0;
      
      return total + servicoTotal;
    }, 0);
  }, [servicos]);

  return (
    <motion.div 
      className="max-w-4xl mx-auto p-8 bg-white text-gray-800 shadow-2xl rounded-2xl border border-gray-200 space-y-6"
      variants={BudgetAnimation.container}
      initial="hidden"
      animate="visible"
    >
      {/* Cabeçalho Profissional */}
      <motion.header 
        className="flex flex-col md:flex-row justify-between items-center mb-6 pb-4 border-b border-gray-200"
        variants={BudgetAnimation.item}
      >
        <div className="flex items-center space-x-4">
          <User className="text-blue-600 w-10 h-10" />
          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              Orçamento para {cliente.nome}
            </h1>
            <p className="text-gray-600 flex items-center">
              <Calendar className="mr-2 w-4 h-4" />
              {data}
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col items-end mt-4 md:mt-0">
          <span className="text-xl font-semibold text-green-700">
            Valor Total: {formatCurrency(totalOrcamento)}
          </span>
        </div> */}
      </motion.header>

      {/* Serviços */}
      {servicos.map((servico, index) => (
        <motion.section 
          key={index} 
          className="bg-gray-50 p-6 rounded-xl"
          variants={BudgetAnimation.item}
        >
          <h2 className="text-xl font-bold mb-4 text-blue-700 flex items-center">
            <CheckCircle2 className="mr-3 text-green-600" />
            {servico.titulo}
          </h2>
          {(Array.isArray(servico.detalhes) ? servico.detalhes : [servico.detalhes])
            .map((detalhe, detIndex) => (
            <div 
              key={detIndex} 
              className="bg-white p-4 rounded-lg shadow-sm mb-4"
            >
              <h3 className="font-semibold text-lg mb-2 text-blue-700">
                {detalhe.titulo || servico.titulo}
              </h3>
              
              <ul className="space-y-2 mb-4 text-gray-700">
                {(detalhe.descricao || []).map((desc, descIndex) => (
                  <li 
                    key={descIndex} 
                    className="flex items-center"
                  >
                    <div>
                      <Info className="mr-2 w-3 h-3 text-blue-500" />
                    </div>
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                {detalhe.maoDeObra && (
                  <p className="bg-blue-50 text-blue-800 p-2 rounded">
                    <strong>Mão de Obra:</strong> {formatCurrency(detalhe.maoDeObra)}
                  </p>
                )}
                {detalhe.materiais && (
                  <p className="bg-green-50 text-green-800 p-2 rounded">
                    <strong>Materiais:</strong> {formatCurrency(detalhe.materiais)}
                  </p>
                )}
                <p className="bg-yellow-50 text-yellow-800 p-2 rounded">
                  <strong>Valor Total:</strong> {formatCurrency(detalhe.valorTotal)}
                </p>
                <p className="bg-purple-50 text-purple-800 p-2 rounded">
                  <strong>Prazo:</strong> {detalhe.prazo}
                </p>
              </div>
            </div>
          ))}
        </motion.section>
      ))}

      {/* Rodapé de Contato */}
      {contato && (
        <motion.footer 
          className="text-center p-4 bg-gray-100 rounded-b-2xl"
          variants={BudgetAnimation.item}
        >
          <p className="text-gray-600">
            Dúvidas? Entre em contato com {contato.nome}
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a 
              href={`tel:${contato.telefone}`} 
              className="text-blue-600 hover:text-blue-700"
            >
              📞 {contato.telefone}
            </a>
            <a 
              href={`https://wa.me/${contato.whatsapp}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700"
            >
              💬 WhatsApp
            </a>
          </div>
        </motion.footer>
      )}
    </motion.div>
  );
};

export default Orcamento;