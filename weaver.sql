-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: weaverdb
-- ------------------------------------------------------
-- Server version	8.0.22-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `name` varchar(255) NOT NULL,
  `unitPrice` int NOT NULL,
  `availableUnits` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'2020-11-08 19:25:40.538117','2020-11-08 19:25:40.538117','Trace 250ml',140,10),(2,'2020-11-08 19:31:56.060934','2020-11-08 19:31:56.060934','Drinking Water 500ml',50,100),(3,'2020-11-08 19:32:14.749719','2020-11-08 19:32:14.749719','Best 750ml',700,10),(4,'2020-11-11 16:31:45.730954','2020-11-11 16:31:45.730954','Fanta Orange 300ml',30,20),(5,'2020-11-11 16:36:48.121560','2020-11-11 16:36:48.121560','Sprite 300ml',30,10),(6,'2020-11-11 19:38:26.015431','2020-11-11 19:38:26.015431','Celar Cask',120,700),(7,'2020-11-11 19:38:43.462476','2020-11-11 19:38:43.462476','4h Street',100,700),(8,'2020-11-11 19:39:34.132264','2020-11-11 19:39:34.132264','Red Label',1200,100),(9,'2020-11-11 20:00:40.512934','2020-11-11 20:00:40.512934','Best 1lt',800,50);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shops`
--

DROP TABLE IF EXISTS `shops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shops` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `openStatus` tinyint NOT NULL DEFAULT '0',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shops`
--

LOCK TABLES `shops` WRITE;
/*!40000 ALTER TABLE `shops` DISABLE KEYS */;
INSERT INTO `shops` VALUES (1,'umoja','the first shop called umoja',0,'2020-11-08 13:32:43.202965','2020-11-12 14:47:19.000000'),(2,'fair','the second shop owned by peter called fair',0,'2020-11-08 13:32:47.049166','2020-11-12 14:51:23.000000');
/*!40000 ALTER TABLE `shops` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock_info`
--

DROP TABLE IF EXISTS `stock_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock_info` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `productName` varchar(255) NOT NULL,
  `unitPrice` int NOT NULL,
  `openingUnits` int NOT NULL,
  `addedUnits` int NOT NULL DEFAULT '0',
  `closingUnits` int NOT NULL,
  `soldUnits` int NOT NULL DEFAULT '0',
  `shopId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_921ab0a52a781d897d43272f252` (`shopId`),
  CONSTRAINT `FK_921ab0a52a781d897d43272f252` FOREIGN KEY (`shopId`) REFERENCES `shops` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_info`
--

LOCK TABLES `stock_info` WRITE;
/*!40000 ALTER TABLE `stock_info` DISABLE KEYS */;
INSERT INTO `stock_info` VALUES (17,'2020-11-11 19:58:15.482281','Red Label',700,20,0,10,10,1),(18,'2020-11-11 19:58:15.480229','Sprite 300ml',40,100,0,50,50,1),(19,'2020-11-11 19:58:15.485407','Celar Cask',700,10,0,5,5,1),(20,'2020-11-12 12:06:06.012939','Best 1lt',700,100,0,0,100,1),(21,'2020-11-12 13:12:13.918570','Celar Cask',700,100,0,60,40,2),(22,'2020-11-12 13:12:13.929196','Red Label',800,10,0,1,9,2),(23,'2020-11-12 13:12:13.931420','4h Street',700,10,0,1,9,2),(24,'2020-11-12 13:12:13.932666','Best 750ml',650,100,0,10,90,2),(25,'2020-11-12 13:12:13.934162','Best 1lt',1200,10,0,1,9,2),(26,'2020-11-12 13:12:13.936128','Sprite 300ml',40,100,0,60,40,2),(27,'2020-11-12 13:28:28.812954','Sprite 300ml',30,10,0,1,9,1),(28,'2020-11-12 13:35:22.791612','4h Street',700,20,0,2,18,1),(29,'2020-11-12 13:55:53.753354','4h Street',700,10,0,1,9,1),(30,'2020-11-12 14:47:08.026222','Best 1lt',1200,10,0,10,0,1),(31,'2020-11-12 14:50:14.359651','Best 1lt',140,2,0,2,0,2),(32,'2020-11-12 14:51:17.293215','Best 1lt',1300,12,0,12,0,2);
/*!40000 ALTER TABLE `stock_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `age` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
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

-- Dump completed on 2020-11-16 20:08:28
