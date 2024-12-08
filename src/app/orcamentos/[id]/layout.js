import React from 'react';
import Footer from '@/components/Footer'; // Atualize o caminho se necessário

export default function Layout({ children }) {
  const contato = {
    nome: "FHResolve",
    telefone: "48 991919791",
    whatsapp: "5548991919791",
    email: "contato@fhresolve.com",
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Conteúdo principal */}
      <main className="flex-grow">{children}</main>

      {/* Footer dinâmico */}
      <Footer contato={contato} />
    </div>
  );
}
