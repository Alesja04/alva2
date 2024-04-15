-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2024 at 05:40 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_alva`
--

-- --------------------------------------------------------

--
-- Table structure for table `kohaletoimetamine`
--

CREATE TABLE `kohaletoimetamine` (
  `Nimi` varchar(255) DEFAULT NULL,
  `Telefoninumber` int(255) DEFAULT NULL,
  `Aadress` varchar(255) NOT NULL,
  `Kohaletoitamine` int(255) NOT NULL,
  `Kategooria` varchar(255) NOT NULL,
  `Nõud` varchar(255) DEFAULT NULL,
  `id_kohale` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `menuu`
--

CREATE TABLE `menuu` (
  `Kategooria` char(255) NOT NULL,
  `Nõud` varchar(255) NOT NULL,
  `Hind` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menuu`
--

INSERT INTO `menuu` (`Kategooria`, `Nõud`, `Hind`) VALUES
('Kuum', 'Kartulid kotletiga Kiievi stiilis (+kaste)', '7'),
('Kuum', 'Riis/tatar lihapallidega kastmes', '7eur'),
('Kuum', 'Liha kartulipudruga', '9eur'),
('Kuum', 'Pasta raguga', '8eur'),
('Kuum', 'Pasta carbonara', '8eur'),
('Kuum', 'Mulgilkapsad', '7eur'),
('Supid', 'Bors', '7eur'),
('Supid', 'Talupoja', '7eur'),
('Supid', 'Seljanka', '7eur'),
('Salatid', 'Olivieri salat', '7eur'),
('Salatid', 'Kevadine salat', '5eur'),
('Salatid', 'Puuvilja salat', '5eur'),
('Salatid', 'Salat seentega', '6eur'),
('Suupisted', 'Röstsai (+kaste)', ' 0,10/tk'),
('Suupisted', 'Võileivad kalaga', ' 0,20/tk'),
('Suupisted', 'Kuum/külm võileib vorsti ja juustuga', '0,15/tk'),
('Suupisted', 'Kreekerid', '2eur'),
('Suupisted', 'Kananagitsad (+kaste)', '2eur/6tk'),
('Suupisted', 'Friikartulid (+kaste)', '3eur'),
('Magustoit', 'Tassikoogid', '0,40/tk'),
('Magustoit', 'Meekook', ' 1,70/tk'),
('Magustoit', 'Napoleoni kook ', '1,70/tk'),
('Magustoit', 'Pirukas õuna/kirsiga/banaaniga', '0,60/tk'),
('Joogid', 'Limonaad', '0,60/250ml'),
('Joogid', 'Mahl', '0,60/250ml'),
('Joogid', 'Tee', '0,60/250ml'),
('Joogid', 'Kohvi', '0,60/250ml');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
