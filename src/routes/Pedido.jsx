import React, { useState } from 'react';
import { ListaProdutos } from '../components/ListaProdutos';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlinePlusCircle as Add } from 'react-icons/ai';

function Pedido() {
  const [carrinho, setCarrinho] = useState([]); // Estado do carrinho

  // Função para adicionar um item ao carrinho
  const adicionarAoCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
  };

  return (
    <>
      <h1>Pedidos</h1>      {/* Botão que leva o usuário para a página de inserir pedido */}
      <Link to="/InserirPedido">Fazer Pedido</Link>
    </>
  );
}

export default Pedido;
