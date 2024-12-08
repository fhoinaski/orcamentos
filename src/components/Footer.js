"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaWhatsapp,
  FaEnvelope,
  FaTools,
  FaCreditCard,
  FaMoneyBillAlt
} from 'react-icons/fa';

const Footer = ({ contato }) => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Seção de Contato */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4">FHResolve - Soluções para Você</h3>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <span className="font-semibold text-gray-300">Nome:</span>
              <span>{contato.nome}</span>
            </p>
            <p className="flex items-center gap-2">
              <FaWhatsapp className="text-green-400" />
              <span>{contato.telefone}</span>
            </p>
            {contato.email && (
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <span>{contato.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Formas de Pagamento */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4">Formas de Pagamento</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaCreditCard className="text-blue-300" />
              <span>Até 12x sem juros</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMoneyBillAlt className="text-green-300" />
              <span>5% de desconto à vista</span>
            </div>
          </div>
        </div>

        {/* Links Adicionais */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4">Navegação</h3>
          <nav className="space-y-2 text-gray-300">
            <a href="" className="hover:text-white transition-colors">
              Solicitar Orçamento
            </a>
            <a href="" className="block hover:text-white transition-colors">
              Nossos Serviços
            </a>
            <a href="" className="block hover:text-white transition-colors">
              Sobre Nós
            </a>
          </nav>
        </div>
      </div>

      {/* Rodapé Final */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          FHResolve - {new Date().getFullYear()} © Todos os direitos reservados.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;