-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Май 08 2024 г., 10:10
-- Версия сервера: 10.4.32-MariaDB
-- Версия PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `alva`
--

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Magusad', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Joogid', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Salatid', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Pasta', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Supisted', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Структура таблицы `delivery`
--

CREATE TABLE `delivery` (
  `id` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `dateDelivery` datetime NOT NULL,
  `nimi` varchar(255) DEFAULT NULL,
  `perekonnanimi` varchar(255) DEFAULT NULL,
  `telefoninumber` varchar(255) DEFAULT NULL,
  `aadress` varchar(255) DEFAULT NULL,
  `products` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`products`)),
  `totalPrice` float NOT NULL,
  `totalQuantity` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `delivery`
--

INSERT INTO `delivery` (`id`, `orderId`, `dateDelivery`, `nimi`, `perekonnanimi`, `telefoninumber`, `aadress`, `products`, `totalPrice`, `totalQuantity`, `createdAt`, `updatedAt`) VALUES
(12, 1714462486, '2024-04-30 07:35:00', 'cfasc', 'afc', '34324', 'fvsx 56', '[{\"id\":13,\"name\":\"PASTA TOMATIGA\",\"img\":\"../img/toma.png\",\"price\":5,\"category_id\":\"4\",\"createdAt\":null,\"updatedAt\":null},{\"id\":3,\"name\":\"MANGOMAHL 0.25l\",\"img\":\"../img/mango.png\",\"price\":4,\"category_id\":\"2\",\"createdAt\":null,\"updatedAt\":null},{\"id\":10,\"name\":\"PUUVILJA SALAT\",\"img\":\"../img/puu.png\",\"price\":7,\"category_id\":\"3\",\"createdAt\":null,\"updatedAt\":null},{\"id\":14,\"name\":\"PASTA ŠAMPJONIDEGA\",\"img\":\"../img/shamp.png\",\"price\":7,\"category_id\":\"4\",\"createdAt\":null,\"updatedAt\":null},{\"id\":18,\"name\":\"NACHOS\",\"img\":\"../img/nach.png\",\"price\":5,\"category_id\":\"5\",\"createdAt\":null,\"updatedAt\":null},{\"id\":29,\"name\":\"SIBULARÕNGAD\",\"img\":\"../img/sib.png\",\"price\":5,\"category_id\":\"5\",\"createdAt\":null,\"updatedAt\":null},{\"id\":21,\"name\":\"MOZZARELLA PULGAD\",\"img\":\"../img/moz.png\",\"price\":5,\"category_id\":\"5\",\"createdAt\":null,\"updatedAt\":null}]', 38, 7, '2024-04-30 07:35:07', '2024-04-30 07:35:07');

-- --------------------------------------------------------

--
-- Структура таблицы `klassid`
--

CREATE TABLE `klassid` (
  `id` int(11) NOT NULL,
  `nimi` varchar(255) DEFAULT NULL,
  `perekonnanimi` varchar(255) DEFAULT NULL,
  `telefoninumber` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `klassid`
--

INSERT INTO `klassid` (`id`, `nimi`, `perekonnanimi`, `telefoninumber`, `createdAt`, `updatedAt`) VALUES
(1, '', '', '', '2024-04-30 07:33:26', '2024-04-30 07:33:26');

-- --------------------------------------------------------

--
-- Структура таблицы `tovar`
--

CREATE TABLE `tovar` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `category_id` int(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `tovar`
--

INSERT INTO `tovar` (`id`, `name`, `img`, `price`, `category_id`, `createdAt`, `updatedAt`) VALUES
(1, 'PANACOTA', '../img/pan.png', 4, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'PIIMAKOOK MAASIKAGA', '../img/pim.png', 4, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'MANGOMAHL 0.25l', '../img/mango.png', 4, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'ARBUUSIMAHL 0.25l', '../img/arb.png', 4, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'ALKOHOLIVABA MOJITO 0.25l', '../img/moh.png', 4, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'LIMONAAD 0.25l', '../img/lim.png', 3, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'COCA COLA 0.25l', '../img/col.png', 3, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'KREEKA SALAT', '../img/krek.png', 7, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'KREEKA SALAT KANAGA', '../img/kre.png', 5, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'PUUVILJA SALAT', '../img/puu.png', 7, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'OLIVER KANAGA', '../img/oli.png', 9, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'PASTA KANAGA', '../img/kana.png', 7, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'PASTA TOMATIGA', '../img/toma.png', 5, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'PASTA ŠAMPJONIDEGA', '../img/shamp.png', 7, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'PASTA MEREANDIDEGA', '../img/mere.png', 9, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'PASTA VORSTIGA', '../img/vorst.png', 8, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'JUUSTUSTALDIK', '../img/just.png', 8, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'NACHOS', '../img/nach.png', 5, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'FRIIKARTULID', '../img/fri.png', 5, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'KANATIIVAD', '../img/kan.png', 8, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'MOZZARELLA PULGAD', '../img/moz.png', 5, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 'JUUSTUKORK', '../img/jus.png', 4, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 'VANILLJÄÄTIS', '../img/van.png', 5, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 'BELGIA VAHVLID', '../img/bel.png', 4, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 'Köögiviljasalat', '../img/koog.png', 8, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 'TIRAMISU', '../img/tir.png', 5, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 'PASTA CARBONARRA', '../img/karb.png', 7, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 'APELSINIMAHL 0.25l', '../img/apel.png', 3, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 'SIBULARÕNGAD', '../img/sib.png', 5, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 'CAESAR KANAGA', '../img/cesar.png', 7, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `klassid`
--
ALTER TABLE `klassid`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `tovar`
--
ALTER TABLE `tovar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `delivery`
--
ALTER TABLE `delivery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `klassid`
--
ALTER TABLE `klassid`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `tovar`
--
ALTER TABLE `tovar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `tovar`
--
ALTER TABLE `tovar`
  ADD CONSTRAINT `tovar_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
