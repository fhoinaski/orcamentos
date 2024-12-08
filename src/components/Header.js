import React from 'react';
import { FaHome, FaClipboardList, FaFileDownload, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import ImprovedGerarPDF from './ImprovedGerarPDF';

const Header = ({ companyName, userName,relatorio }) => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo e Nome da Empresa */}
        <div className="flex items-center space-x-4">
          <img 
            src="/logo.png" 
            alt="Company Logo" 
            className="h-10 w-10 rounded-full object-cover"
          />
          <h1 className="text-xl font-bold text-gray-800">{companyName}</h1>
        </div>

        {/* Menu de Navegação */}
        <nav className="flex items-center space-x-6">
          {/* <Link href="" className="flex items-center text-gray-600 hover:text-primary transition-colors group">
            <FaHome className="mr-2 text-gray-500 group-hover:text-primary" />
            Início
          </Link> */}
          {/* <Link href="" className="flex items-center text-gray-600 hover:text-primary transition-colors group">
            <FaClipboardList className="mr-2 text-gray-500 group-hover:text-primary" />
            Orçamentos
          </Link> */}
          {/* <Link href="/perfil" className="flex items-center text-gray-600 hover:text-primary transition-colors group">
            <FaUser className="mr-2 text-gray-500 group-hover:text-primary" />
            {userName}
          </Link> */}
        </nav>

        {/* Área de Usuário e Ações */}
        <div className="flex items-center space-x-4">
          <button 
            className="bg-secondary text-white px-4 py-2 rounded-lg flex items-center hover:bg-primary transition-colors"
          >
            
            <ImprovedGerarPDF dados={relatorio}/>
            Baixar Relatórios
          </button>
          
          {/* <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-700 font-semibold">
                {userName ? userName.charAt(0).toUpperCase() : 'U'}
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;