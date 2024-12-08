import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Estilos para o PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#f4f4f4',
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#001f3f',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#003366',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: '#333',
  },
  list: {
    marginLeft: 15,
    marginBottom: 5,
  },
  footer: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 10,
    color: '#555',
  },
});

// Função auxiliar para formatar valor
const formatCurrency = (value) => {
  const numValue = typeof value === 'string' 
    ? parseFloat(value.replace(',', '.')) 
    : value;
  
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(numValue || 0);
};

const PDFDocument = ({ dados }) => {
  // Normalize detalhes to always be an array
  const normalizeDetalhes = (detalhes) => {
    return Array.isArray(detalhes) ? detalhes : [detalhes];
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.title}>FHResolve - Soluções para Você</Text>
          <Text style={styles.text}>Cliente: {dados.cliente.nome}</Text>
          <Text style={styles.text}>Data: {dados.data}</Text>
        </View>

        {/* Serviços */}
        {dados.servicos.map((servico, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.title}>
              {index + 1}. {servico.titulo}
            </Text>
            
            {normalizeDetalhes(servico.detalhes).map((detalhe, subIndex) => (
              <View key={subIndex}>
                {detalhe.titulo && (
                  <Text style={styles.text}>{detalhe.titulo}</Text>
                )}
                
                {/* Descrições */}
                {detalhe.descricao && Array.isArray(detalhe.descricao) && (
                  <View>
                    {detalhe.descricao.map((desc, descIndex) => (
                      <Text key={descIndex} style={styles.list}>
                        - {desc}
                      </Text>
                    ))}
                  </View>
                )}

                {/* Valores */}
                {detalhe.maoDeObra && (
                  <Text style={styles.text}>
                    Mão de Obra: {formatCurrency(detalhe.maoDeObra)}
                  </Text>
                )}
                
                {detalhe.materiais && (
                  <Text style={styles.text}>
                    Materiais: {formatCurrency(detalhe.materiais)}
                  </Text>
                )}

                <Text style={styles.text}>
                  Valor Total: {formatCurrency(detalhe.valorTotal)}
                </Text>
                
                <Text style={styles.text}>
                  Prazo: {detalhe.prazo}
                </Text>
              </View>
            ))}
          </View>
        ))}

        {/* Rodapé */}
        <View style={styles.footer}>
          <Text>Atenciosamente, {dados.contato.nome}</Text>
          <Text>Telefone: {dados.contato.telefone}</Text>
          <Text>WhatsApp: {dados.contato.telefone}</Text>
          <Text>Email: contato@fhresolve.com.br</Text>
          
          {dados.formasPagamento && (
            <View>
              <Text>
                Forma Pagamento: 
                {dados.formasPagamento.parcelado 
                  ? ` ${dados.formasPagamento.parcelado.parcelas}x sem juros` 
                  : ''}
              </Text>
              {dados.formasPagamento.aVista && (
                <Text>À vista {dados.formasPagamento.aVista.desconto * 100}% de desconto</Text>
              )}
            </View>
          )}
          
          <Text>
            FHResolve - {new Date().getFullYear()} © Todos os direitos reservados.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;