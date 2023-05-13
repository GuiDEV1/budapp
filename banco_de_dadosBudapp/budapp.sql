-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 03-Maio-2023 às 23:37
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `budapp`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `budgets`
--

CREATE TABLE `budgets` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `startDate` int(255) NOT NULL,
  `finalDate` int(255) NOT NULL,
  `value` int(255) NOT NULL,
  `idUser` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `budgets`
--

INSERT INTO `budgets` (`id`, `name`, `client`, `description`, `startDate`, `finalDate`, `value`, `idUser`) VALUES
(21, 'teste23', 'Teste1', 'Testeaaa', 20221001, 20221001, 200, 43),
(22, 'teste', 'teste', '', 20221001, 20221001, 0, 43),
(26, 'Orçamento1', 'Exemplo cliente1', 'descrição do serviço a ser realizado1', 20220901, 20221125, 16001, 43),
(27, 'maisUm', 'aaaa', 'aaaa', 20221001, 20221105, 12321, 43),
(37, 'Orçamento apresentação', 'Cliente da apresentação', 'Concerto veiculo apresenção final', 20221101, 20221210, 2000, 46);

-- --------------------------------------------------------

--
-- Estrutura da tabela `userauth`
--

CREATE TABLE `userauth` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile` varchar(5000) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `userauth`
--

INSERT INTO `userauth` (`id`, `name`, `email`, `password`, `profile`) VALUES
(42, 'teste', 'admin@gmail.com', '1234', 'https://firebasestorage.googleapis.com/v0/b/erpmicrouploads.appspot.com/o/images%2F02aded6611a24913275218926e2803af.jpg?alt=media&token=90eaf4f6-85ec-4f54-925a-513553ccff08'),
(43, 'teste', 'teste@teste.com.br', '123', 'https://firebasestorage.googleapis.com/v0/b/erpmicrouploads.appspot.com/o/images%2FeIhoNuMO_400x400.jpg?alt=media&token=5650db0c-b7d5-4e10-9939-9489793fd9b3'),
(44, 'teste', 'testetesteteste@gmail.com', '123', ''),
(45, 'Teste', 'tetete@gmail.com', '123', 'https://firebasestorage.googleapis.com/v0/b/erpmicrouploads.appspot.com/o/images%2Fde-quem-a-miwa-gosta--god-usopp-24064977-140720221627.jpg?alt=media&token=447ab694-632d-437c-9283-20a2b0d53dd3'),
(46, 'Apresentação', 'apresentacao@gmail.com', '123', 'https://firebasestorage.googleapis.com/v0/b/erpmicrouploads.appspot.com/o/images%2F274455.jpg?alt=media&token=c69a2647-174a-4e95-b684-589fd2656ff6'),
(47, 'Pedro', 'admin888@gmail.com', '123', 'https://firebasestorage.googleapis.com/v0/b/erpmicrouploads.appspot.com/o/images%2F02aded6611a24913275218926e2803af.jpg?alt=media&token=39033db2-e2d7-497e-b455-8ee4c4f0b3b7'),
(48, 'Pedro H.', 'phc.contato2222@gmail.com', '123', '');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `budgets`
--
ALTER TABLE `budgets`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `userauth`
--
ALTER TABLE `userauth`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `budgets`
--
ALTER TABLE `budgets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de tabela `userauth`
--
ALTER TABLE `userauth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
