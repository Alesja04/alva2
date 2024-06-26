-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2024 at 08:34 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alva`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Magusad', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Joogid', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Salatid', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Pasta', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Supisted', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `delivery`
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

-- --------------------------------------------------------

--
-- Table structure for table `tovar`
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
-- Dumping data for table `tovar`
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
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tovar`
--
ALTER TABLE `tovar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `delivery`
--
ALTER TABLE `delivery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tovar`
--
ALTER TABLE `tovar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tovar`
--
ALTER TABLE `tovar`
  ADD CONSTRAINT `tovar_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
