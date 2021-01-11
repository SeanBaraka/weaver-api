-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: weaverdb
-- ------------------------------------------------------
-- Server version	8.0.22-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `available_vehicles`
--

DROP TABLE IF EXISTS `available_vehicles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `available_vehicles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `modelType` varchar(255) NOT NULL,
  `plateNumber` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `available_vehicles`
--

LOCK TABLES `available_vehicles` WRITE;
/*!40000 ALTER TABLE `available_vehicles` DISABLE KEYS */;
INSERT INTO `available_vehicles` VALUES (1,'Toyota Probox','KCA 359B'),(2,'Toyota Probox','KBS 456F'),(4,'Mini Bus Isuzu','KBA 345T');
/*!40000 ALTER TABLE `available_vehicles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `name` varchar(255) NOT NULL,
  `unitPrice` float NOT NULL,
  `availableUnits` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (10,'2020-11-25 18:04:02.831139','2020-11-25 18:04:02.831139','Soda',0,0),(11,'2020-11-25 18:04:19.225951','2020-11-25 18:04:19.225951','Konyagi',0,0),(12,'2020-11-25 18:04:29.732881','2020-11-25 18:04:29.732881','K/Cane',0,0),(13,'2020-11-25 18:04:42.184302','2020-11-25 18:04:42.184302','K/Extra',0,0),(14,'2020-11-25 18:04:54.302756','2020-11-25 18:04:54.302756','Chrome',0,0),(15,'2020-11-25 18:05:03.766437','2020-11-25 18:05:03.766437','W/Pearl',0,0),(16,'2020-11-25 18:05:11.126078','2020-11-25 18:05:11.126078','Kibao',0,0),(17,'2020-11-25 18:05:24.481705','2020-11-25 18:05:24.481705','V/A',0,0),(18,'2020-11-25 18:05:36.046111','2020-11-25 18:05:36.046111','Napoleon',0,0),(19,'2020-11-25 18:05:47.559709','2020-11-25 18:05:47.559709','K/King',0,0),(20,'2020-11-25 18:06:03.136388','2020-11-25 18:06:03.136388','M/Walker',0,0),(21,'2020-11-25 18:06:11.771613','2020-11-25 18:06:11.771613','Dallas',0,0),(22,'2020-11-25 18:06:21.391710','2020-11-25 18:06:21.391710','Piston',0,0),(23,'2020-11-25 18:06:31.856982','2020-11-25 18:06:31.856982','E/Drink',0,0),(24,'2020-11-25 18:06:39.422408','2020-11-25 18:06:39.422408','Magic',0,0),(25,'2020-11-25 18:06:48.574732','2020-11-25 18:06:48.574732','Trace',0,0),(26,'2020-11-25 18:06:59.522081','2020-11-25 18:06:59.522081','Sportman',0,0),(27,'2020-11-25 18:07:07.652221','2020-11-25 18:07:07.652221','Safari',0,0),(28,'2020-11-25 18:07:14.978711','2020-11-25 18:07:14.978711','Rooster',0,0),(29,'2020-11-25 18:07:23.020922','2020-11-25 18:07:23.020922','Hunters',0,0),(30,'2020-11-25 18:07:34.140258','2020-11-25 18:07:34.140258','Gomba',0,0),(31,'2020-11-25 18:07:42.084236','2020-11-25 18:07:42.084236','Matchbox',0,0),(32,'2020-11-25 18:07:51.941105','2020-11-25 18:07:51.941105','Balozi',0,0),(33,'2020-11-25 18:08:03.577094','2020-11-25 18:08:03.577094','Tusker Cider',0,0),(34,'2020-11-25 18:08:14.971654','2020-11-25 18:08:14.971654','Guinness',0,0),(35,'2020-11-25 18:08:25.089177','2020-11-25 18:08:25.089177','Pilsner',0,0),(36,'2020-11-25 18:08:38.771571','2020-11-25 18:08:38.771571','Allsopps',0,0),(37,'2020-11-25 18:08:49.269435','2020-11-25 18:08:49.269435','Whitecup',0,0),(38,'2020-11-25 18:08:57.529037','2020-11-25 18:08:57.529037','Tusker',0,0),(39,'2020-11-25 18:09:09.006760','2020-11-25 18:09:09.006760','Captain',0,0),(40,'2020-11-25 18:09:26.070687','2020-11-25 18:09:26.070687','County',0,0),(41,'2020-11-25 18:10:12.023050','2020-11-25 18:10:12.023050','Caribian',0,0),(42,'2020-11-25 18:10:20.994394','2020-11-25 18:10:20.994394','Soda Pet',0,0),(43,'2020-11-25 18:10:37.760642','2020-11-25 18:10:37.760642','Origin',0,0),(44,'2020-11-25 18:10:48.878432','2020-11-25 18:10:48.878432','Tripple Ice',0,0),(45,'2020-11-25 18:10:56.910033','2020-11-25 18:10:56.910033','Smart',0,0),(46,'2020-11-25 18:11:07.982443','2020-11-25 18:11:07.982443','Kingstone',0,0);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shops`
--

DROP TABLE IF EXISTS `shops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `shops` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `openStatus` tinyint NOT NULL DEFAULT '0',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shops`
--

LOCK TABLES `shops` WRITE;
/*!40000 ALTER TABLE `shops` DISABLE KEYS */;
INSERT INTO `shops` VALUES (1,'umoja','the first shop called umoja',1,'2020-11-08 13:32:43.202965','2020-12-08 14:22:51.000000'),(2,'fair','the second shop owned by peter called fair',1,'2020-11-08 13:32:47.049166','2020-12-08 14:26:47.000000'),(3,'weaver store','store for the shops and any other stocks',0,'2020-11-25 09:54:25.600926','2020-11-25 09:54:25.600926');
/*!40000 ALTER TABLE `shops` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock_info`
--

DROP TABLE IF EXISTS `stock_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `stock_info` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `productName` varchar(255) NOT NULL,
  `shopId` int DEFAULT NULL,
  `unitPrice` float NOT NULL,
  `openingUnits` float NOT NULL,
  `addedUnits` float NOT NULL DEFAULT '0',
  `closingUnits` float NOT NULL,
  `soldUnits` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_921ab0a52a781d897d43272f252` (`shopId`),
  CONSTRAINT `FK_921ab0a52a781d897d43272f252` FOREIGN KEY (`shopId`) REFERENCES `shops` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=148 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_info`
--

LOCK TABLES `stock_info` WRITE;
/*!40000 ALTER TABLE `stock_info` DISABLE KEYS */;
INSERT INTO `stock_info` VALUES (143,'2020-12-08 00:02:07.974039','Soda',1,40,13.5,48,48.25,13.25),(144,'2020-12-08 00:02:07.975949','Konyagi',1,200,12,0,5.75,6.25),(145,'2020-12-08 00:02:07.978830','K/Extra',1,200,7.5,5,7.5,5),(146,'2020-12-08 14:22:51.832315','Napoleon',1,180,2.25,5,7.25,0),(147,'2020-12-08 14:26:47.947792','Pilsner',2,180,1,0,1,0);
/*!40000 ALTER TABLE `stock_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock_summaries`
--

DROP TABLE IF EXISTS `stock_summaries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `stock_summaries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `openingStockAmount` int NOT NULL,
  `closingStockAmount` int NOT NULL,
  `soldStockAmount` int NOT NULL,
  `shop` varchar(255) NOT NULL,
  `stockItems` text NOT NULL,
  `addedStockAmount` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_summaries`
--

LOCK TABLES `stock_summaries` WRITE;
/*!40000 ALTER TABLE `stock_summaries` DISABLE KEYS */;
INSERT INTO `stock_summaries` VALUES (12,'2020-12-08 00:03:27.318628',4440,4580,2780,'umoja','[{\"id\":143,\"createdAt\":\"2020-12-07T21:02:07.974Z\",\"productName\":\"Soda\",\"unitPrice\":40,\"openingUnits\":13.5,\"addedUnits\":48,\"closingUnits\":\"48.25\",\"soldUnits\":13.25},{\"id\":144,\"createdAt\":\"2020-12-07T21:02:07.975Z\",\"productName\":\"Konyagi\",\"unitPrice\":200,\"openingUnits\":12,\"addedUnits\":0,\"closingUnits\":\"5.75\",\"soldUnits\":6.25},{\"id\":145,\"createdAt\":\"2020-12-07T21:02:07.978Z\",\"productName\":\"K/Extra\",\"unitPrice\":200,\"openingUnits\":7.5,\"addedUnits\":5,\"closingUnits\":\"7.5\",\"soldUnits\":5}]',2920),(13,'2020-12-08 14:26:33.237574',0,0,0,'fair','[]',0);
/*!40000 ALTER TABLE `stock_summaries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `idNumber` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_logins`
--

DROP TABLE IF EXISTS `user_logins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `user_logins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `salt` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `passwordHash` varchar(255) NOT NULL,
  `roleId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_0cee36297631036ccef58a2b14b` (`roleId`),
  CONSTRAINT `FK_0cee36297631036ccef58a2b14b` FOREIGN KEY (`roleId`) REFERENCES `user_roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_logins`
--

LOCK TABLES `user_logins` WRITE;
/*!40000 ALTER TABLE `user_logins` DISABLE KEYS */;
INSERT INTO `user_logins` VALUES (1,'65560cae2b018cab097f960c3bca3936','System','Administrator','admin','2c62bddfbc15055273e7d7ce36e12bdacc800df2279429da6f7fde18d56d70e7b119d2191ab805233f21753c5295cccd0d7e0c45a063511e606f1916e95dbb74',6),(2,'1b0d6319f4e73f809c5574d76c400c29','Sean','Baraka','sean','a9bb05a5c17b1b2bd41122c7d1f8cfe2f845e9c2945cc83254e91a44485764ecb3e44e22dc6e1583f9d3fc33019a9b77096ba002ecc3aa902f1495afd4e3a23b',6),(3,'23621b9934d04daa3abd38536e06853e','Peter','Mutune','admin','c28260924e52717a648317829d56957007ed413dcfa04b8a7ef8e8b992762390162c4f75c2632a705ff05736516d6723436e6b462d3c6c53b130df59e6867d18',5);
/*!40000 ALTER TABLE `user_logins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `user_roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (1,'driver assistant'),(2,'driver'),(3,'supervisor'),(4,'manager'),(5,'shop admin'),(6,'system admin');
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle_reports`
--

DROP TABLE IF EXISTS `vehicle_reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `vehicle_reports` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `vehicle` varchar(255) NOT NULL,
  `stock` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_reports`
--

LOCK TABLES `vehicle_reports` WRITE;
/*!40000 ALTER TABLE `vehicle_reports` DISABLE KEYS */;
INSERT INTO `vehicle_reports` VALUES (1,'2020-12-07 14:51:07.252556','KCA 359B','[{\"name\":\"Tusker\",\"unitPrice\":\"2000\",\"availableUnits\":400}]'),(2,'2020-12-07 14:52:30.212442','KBS 456F','[{\"name\":\"Whitecup\",\"unitPrice\":\"2000\",\"availableUnits\":110}]');
/*!40000 ALTER TABLE `vehicle_reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle_route_driver`
--

DROP TABLE IF EXISTS `vehicle_route_driver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `vehicle_route_driver` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `vehicle` varchar(255) NOT NULL,
  `driver` varchar(255) NOT NULL,
  `route` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_route_driver`
--

LOCK TABLES `vehicle_route_driver` WRITE;
/*!40000 ALTER TABLE `vehicle_route_driver` DISABLE KEYS */;
INSERT INTO `vehicle_route_driver` VALUES (8,'2020-12-07 13:24:22.300989','KCA 359B','Joseph Mutinda','Nairobi - Machakos'),(9,'2020-12-07 13:25:37.495139','KBS 456F','Baraka Baraka','Nairobi - Voi'),(10,'2020-12-07 13:26:31.402886','KBA 345T','James','Machakos - Kitui'),(11,'2020-12-07 13:28:23.106464','KCA 359B','Baraka Baraka','Nairobi - Machakos'),(12,'2020-12-07 13:30:18.466390','KCA 359B','James Mutisya','Nairobi - Machakos'),(13,'2020-12-07 13:31:18.413519','KCA 359B','James Mutisya','Machakos - Kitui'),(14,'2020-12-07 13:32:22.529004','KCA 359B','James Mutisya','Machakos - Kitui'),(15,'2020-12-07 13:33:51.410999','KCA 359B','Joseph Mutinda','Machakos - Kitui'),(16,'2020-12-07 13:35:03.504935','KCA 359B','James','Nairobi - Voi'),(17,'2020-12-07 14:51:07.217259','KCA 359B','James Mutisya','Nairobi - Voi'),(18,'2020-12-07 14:52:30.180775','KBS 456F','Baraka Baraka','Nairobi - Voi');
/*!40000 ALTER TABLE `vehicle_route_driver` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle_routes`
--

DROP TABLE IF EXISTS `vehicle_routes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `vehicle_routes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `region` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_routes`
--

LOCK TABLES `vehicle_routes` WRITE;
/*!40000 ALTER TABLE `vehicle_routes` DISABLE KEYS */;
INSERT INTO `vehicle_routes` VALUES (1,'Machakos - Kitui','SouthEastern Region'),(2,'Nairobi - Machakos','Metropol Area'),(3,'Nairobi - Voi','Mombasa Road');
/*!40000 ALTER TABLE `vehicle_routes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle_stock_info`
--

DROP TABLE IF EXISTS `vehicle_stock_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `vehicle_stock_info` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `productName` varchar(255) NOT NULL,
  `vehicleId` int DEFAULT NULL,
  `unitPrice` float NOT NULL,
  `openingUnits` float NOT NULL,
  `closingUnits` float NOT NULL,
  `soldUnits` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_637bbb8f9fc3467c266e7709a96` (`vehicleId`),
  CONSTRAINT `FK_637bbb8f9fc3467c266e7709a96` FOREIGN KEY (`vehicleId`) REFERENCES `available_vehicles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_stock_info`
--

LOCK TABLES `vehicle_stock_info` WRITE;
/*!40000 ALTER TABLE `vehicle_stock_info` DISABLE KEYS */;
INSERT INTO `vehicle_stock_info` VALUES (1,'2020-11-23 09:04:12.657567','',1,0,0,0,0),(2,'2020-11-23 09:39:03.220242','',1,0,0,0,0),(3,'2020-11-23 09:39:03.221385','',1,0,0,0,0),(5,'2020-11-23 09:43:24.760557','',4,0,0,0,0),(7,'2020-12-07 13:24:22.338829','',1,0,0,0,0),(8,'2020-12-07 13:24:22.340500','',1,0,0,0,0),(9,'2020-12-07 13:25:37.538941','',2,0,0,0,0),(10,'2020-12-07 13:25:37.540967','',2,0,0,0,0),(11,'2020-12-07 13:26:31.453300','',4,0,0,0,0),(12,'2020-12-07 13:28:23.152187','',1,0,0,0,0),(13,'2020-12-07 13:30:18.510996','',1,0,0,0,0),(14,'2020-12-07 13:31:18.464884','',1,0,0,0,0),(15,'2020-12-07 13:32:22.574471','',1,0,0,0,0),(16,'2020-12-07 13:33:51.454176','',1,0,0,0,0),(17,'2020-12-07 13:35:03.559891','',1,0,0,0,0),(18,'2020-12-07 14:51:07.251625','',1,0,0,0,0),(19,'2020-12-07 14:52:30.211178','',2,0,0,0,0);
/*!40000 ALTER TABLE `vehicle_stock_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-08 14:53:20
