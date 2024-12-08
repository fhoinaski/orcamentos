'use client';
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { FaFilePdf } from 'react-icons/fa';
import PDFDocument from './PDFDocument';

const ImprovedGerarPDF = ({ dados }) => (
    <PDFDownloadLink 
    document={<PDFDocument dados={dados} />} 
    fileName={`orcamento_${dados.id}.pdf`}
    className="contents"
  >
    {({ loading }) => (
      <button
        className={`
          flex items-center 
          text-red-100 hover:text-red-200 
          mr-4 transition-all duration-300
          ${loading ? 'cursor-not-allowed opacity-50' : 'hover:scale-105'}
        `}
        disabled={loading}
        title={loading ? 'Gerando PDF...' : 'Gerar PDF'}
      >
        <FaFilePdf className={`w-6 h-6 ${loading ? 'animate-spin' : ''}`} />
      </button>
    )}
  </PDFDownloadLink>
);

export default ImprovedGerarPDF;
