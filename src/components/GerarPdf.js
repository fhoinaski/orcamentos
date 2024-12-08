import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { FaFilePdf } from 'react-icons/fa'; // Importa o ícone do PDF
import PDFDocument from './PDFDocument'; // Importa o documento PDF

const GerarPDF = ({ dados }) => (
  <PDFDownloadLink document={<PDFDocument dados={dados} />} fileName="orcamento.pdf">
    {({ loading }) =>
      loading ? (
        <button
          className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg"
          disabled
        >
          <FaFilePdf className="text-white text-2xl animate-spin" />
        </button>
      ) : (
        <button
          className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors"
        >
          <div >
            <FaFilePdf className="text-red-500 text-lg justify-center flex m-auto" />
          <p className='text-[8px] mt-1 text-white '>Gerar Pdf</p>
          </div>
        </button>
      )
    }
  </PDFDownloadLink>
);

export default GerarPDF;
