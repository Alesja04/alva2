-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: alva
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Magusad','0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'Joogid','0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,'Salatid','0000-00-00 00:00:00','0000-00-00 00:00:00'),(4,'Pasta','0000-00-00 00:00:00','0000-00-00 00:00:00'),(5,'Supisted','0000-00-00 00:00:00','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery`
--

DROP TABLE IF EXISTS `delivery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `delivery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery`
--

LOCK TABLES `delivery` WRITE;
/*!40000 ALTER TABLE `delivery` DISABLE KEYS */;
/*!40000 ALTER TABLE `delivery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `klassid`
--

DROP TABLE IF EXISTS `klassid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `klassid` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nimi` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `perekonnanimi` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telefoninumber` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `klassid`
--

LOCK TABLES `klassid` WRITE;
/*!40000 ALTER TABLE `klassid` DISABLE KEYS */;
/*!40000 ALTER TABLE `klassid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tovar`
--

DROP TABLE IF EXISTS `tovar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tovar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `category_id` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tovar`
--

LOCK TABLES `tovar` WRITE;
/*!40000 ALTER TABLE `tovar` DISABLE KEYS */;
INSERT INTO `tovar` VALUES (1,'PANACOTA','../img/pan.png',4,'1','0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'PIIMAKOOK MAASIKAGA','../img/pim.png',4,'1','0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,'MANGOMAHL 0.25l','../img/mango.png',4,'2','0000-00-00 00:00:00','0000-00-00 00:00:00'),(4,'ARBUUSIMAHL 0.25l','../img/arb.png',4,'2','0000-00-00 00:00:00','0000-00-00 00:00:00'),(5,'ALKOHOLIVABA MOJITO 0.25l','../img/moh.png',4,'2','0000-00-00 00:00:00','0000-00-00 00:00:00'),(6,'LIMONAAD 0.25l','../img/lim.png',3,'2','0000-00-00 00:00:00','0000-00-00 00:00:00'),(7,'COCA COLA 0.25l','../img/col.png',3,'2','0000-00-00 00:00:00','0000-00-00 00:00:00'),(8,'KREEKA SALAT','../img/krek.png',7,'3','0000-00-00 00:00:00','0000-00-00 00:00:00'),(9,'KREEKA SALAT KANAGA','../img/kre.png',5,'3','0000-00-00 00:00:00','0000-00-00 00:00:00'),(10,'PUUVILJA SALAT','../img/puu.png',7,'3','0000-00-00 00:00:00','0000-00-00 00:00:00'),(11,'OLIVER KANAGA','../img/oli.png',9,'3','0000-00-00 00:00:00','0000-00-00 00:00:00'),(12,'PASTA KANAGA','../img/kana.png',7,'4','0000-00-00 00:00:00','0000-00-00 00:00:00'),(13,'PASTA TOMATIGA','../img/toma.png',5,'4','0000-00-00 00:00:00','0000-00-00 00:00:00'),(14,'PASTA ŠAMPJONIDEGA','../img/shamp.png',7,'4','0000-00-00 00:00:00','0000-00-00 00:00:00'),(15,'PASTA MEREANDIDEGA','../img/mere.png',9,'4','0000-00-00 00:00:00','0000-00-00 00:00:00'),(16,'PASTA VORSTIGA','../img/vorst.png',8,'4','0000-00-00 00:00:00','0000-00-00 00:00:00'),(17,'JUUSTUSTALDIK','../img/just.png',8,'5','0000-00-00 00:00:00','0000-00-00 00:00:00'),(18,'NACHOS','../img/nach.png',5,'5','0000-00-00 00:00:00','0000-00-00 00:00:00'),(19,'FRIIKARTULID','../img/fri.png',5,'5','0000-00-00 00:00:00','0000-00-00 00:00:00'),(20,'KANATIIVAD','../img/kan.png',8,'5','0000-00-00 00:00:00','0000-00-00 00:00:00'),(21,'MOZZARELLA PULGAD','../img/moz.png',5,'5','0000-00-00 00:00:00','0000-00-00 00:00:00'),(22,'JUUSTUKORK','../img/jus.png',4,'1','0000-00-00 00:00:00','0000-00-00 00:00:00'),(23,'VANILLJÄÄTIS','../img/van.png',5,'1','0000-00-00 00:00:00','0000-00-00 00:00:00'),(24,'BELGIA VAHVLID','../img/bel.png',4,'1','0000-00-00 00:00:00','0000-00-00 00:00:00'),(25,'Köögiviljasalat','../img/koog.png',8,'3','0000-00-00 00:00:00','0000-00-00 00:00:00'),(26,'TIRAMISU','../img/tir.png',5,'1','0000-00-00 00:00:00','0000-00-00 00:00:00'),(27,'PASTA CARBONARRA','../img/karb.png',7,'4','0000-00-00 00:00:00','0000-00-00 00:00:00'),(28,'APELSINIMAHL 0.25l','../img/apel.png',3,'2','0000-00-00 00:00:00','0000-00-00 00:00:00'),(29,'SIBULARÕNGAD','../img/sib.png',5,'5','0000-00-00 00:00:00','0000-00-00 00:00:00'),(30,'CAESAR KANAGA','../img/cesar.png',7,'3','0000-00-00 00:00:00','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `tovar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','admin@ee.ee','$2b$10$Lm8oYi6z5JY2iihPuNCeE.WyBXQpimjM4nbuqn.XAMoKuG2W0yx9a','admin','2024-05-10 04:47:43','2024-05-10 04:47:43');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-10 11:30:52
