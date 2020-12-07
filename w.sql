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
  `unitPrice` int NOT NULL,
  `availableUnits` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (10,'2020-11-25 18:04:02.831139','2020-11-25 18:04:02.831139','Soda',40,100),(11,'2020-11-25 18:04:19.225951','2020-11-25 18:04:19.225951','Konyagi',200,100),(12,'2020-11-25 18:04:29.732881','2020-11-25 18:04:29.732881','K/Cane',300,100),(13,'2020-11-25 18:04:42.184302','2020-11-25 18:04:42.184302','K/Extra',200,100),(14,'2020-11-25 18:04:54.302756','2020-11-25 18:04:54.302756','Chrome',200,100),(15,'2020-11-25 18:05:03.766437','2020-11-25 18:05:03.766437','W/Pearl',180,100),(16,'2020-11-25 18:05:11.126078','2020-11-25 18:05:11.126078','Kibao',200,100),(17,'2020-11-25 18:05:24.481705','2020-11-25 18:05:24.481705','V/A',300,100),(18,'2020-11-25 18:05:36.046111','2020-11-25 18:05:36.046111','Napoleon',180,100),(19,'2020-11-25 18:05:47.559709','2020-11-25 18:05:47.559709','K/King',180,100),(20,'2020-11-25 18:06:03.136388','2020-11-25 18:06:03.136388','M/Walker',140,100),(21,'2020-11-25 18:06:11.771613','2020-11-25 18:06:11.771613','Dallas',140,100),(22,'2020-11-25 18:06:21.391710','2020-11-25 18:06:21.391710','Piston',140,100),(23,'2020-11-25 18:06:31.856982','2020-11-25 18:06:31.856982','E/Drink',50,100),(24,'2020-11-25 18:06:39.422408','2020-11-25 18:06:39.422408','Magic',100,100),(25,'2020-11-25 18:06:48.574732','2020-11-25 18:06:48.574732','Trace',120,100),(26,'2020-11-25 18:06:59.522081','2020-11-25 18:06:59.522081','Sportman',15,100),(27,'2020-11-25 18:07:07.652221','2020-11-25 18:07:07.652221','Safari',10,100),(28,'2020-11-25 18:07:14.978711','2020-11-25 18:07:14.978711','Rooster',10,100),(29,'2020-11-25 18:07:23.020922','2020-11-25 18:07:23.020922','Hunters',300,100),(30,'2020-11-25 18:07:34.140258','2020-11-25 18:07:34.140258','Gomba',1,100),(31,'2020-11-25 18:07:42.084236','2020-11-25 18:07:42.084236','Matchbox',5,100),(32,'2020-11-25 18:07:51.941105','2020-11-25 18:07:51.941105','Balozi',200,100),(33,'2020-11-25 18:08:03.577094','2020-11-25 18:08:03.577094','Tusker Cider',200,100),(34,'2020-11-25 18:08:14.971654','2020-11-25 18:08:14.971654','Guinness',200,100),(35,'2020-11-25 18:08:25.089177','2020-11-25 18:08:25.089177','Pilsner',200,100),(36,'2020-11-25 18:08:38.771571','2020-11-25 18:08:38.771571','Allsopps',200,100),(37,'2020-11-25 18:08:49.269435','2020-11-25 18:08:49.269435','Whitecup',200,100),(38,'2020-11-25 18:08:57.529037','2020-11-25 18:08:57.529037','Tusker',200,100),(39,'2020-11-25 18:09:09.006760','2020-11-25 18:09:09.006760','Captain',300,100),(40,'2020-11-25 18:09:26.070687','2020-11-25 18:09:26.070687','County',170,100),(41,'2020-11-25 18:10:12.023050','2020-11-25 18:10:12.023050','Caribian',170,100),(42,'2020-11-25 18:10:20.994394','2020-11-25 18:10:20.994394','Soda Pet',70,100),(43,'2020-11-25 18:10:37.760642','2020-11-25 18:10:37.760642','Origin',300,100),(44,'2020-11-25 18:10:48.878432','2020-11-25 18:10:48.878432','Tripple Ice',180,100),(45,'2020-11-25 18:10:56.910033','2020-11-25 18:10:56.910033','Smart',100,100),(46,'2020-11-25 18:11:07.982443','2020-11-25 18:11:07.982443','Kingstone',100,100);
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
INSERT INTO `shops` VALUES (1,'umoja','the first shop called umoja',0,'2020-11-08 13:32:43.202965','2020-12-02 18:54:53.000000'),(2,'fair','the second shop owned by peter called fair',0,'2020-11-08 13:32:47.049166','2020-12-02 12:05:19.000000'),(3,'weaver store','store for the shops and any other stocks',0,'2020-11-25 09:54:25.600926','2020-11-25 09:54:25.600926');
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
  `unitPrice` int NOT NULL,
  `openingUnits` int NOT NULL,
  `addedUnits` int NOT NULL DEFAULT '0',
  `closingUnits` int NOT NULL,
  `soldUnits` int NOT NULL DEFAULT '0',
  `shopId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_921ab0a52a781d897d43272f252` (`shopId`),
  CONSTRAINT `FK_921ab0a52a781d897d43272f252` FOREIGN KEY (`shopId`) REFERENCES `shops` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_info`
--

LOCK TABLES `stock_info` WRITE;
/*!40000 ALTER TABLE `stock_info` DISABLE KEYS */;
INSERT INTO `stock_info` VALUES (107,'2020-12-01 21:22:09.689313','Smart',200,10,0,4,7,1),(108,'2020-12-01 21:22:09.690914','K/King',180,12,0,5,8,1),(109,'2020-12-01 21:22:09.691939','Kingstone',100,21,0,13,8,1),(110,'2020-12-02 11:37:20.061330','Caribian',200,12,0,1,11,1),(111,'2020-12-02 11:37:20.063771','Soda Pet',100,10,0,1,9,1),(112,'2020-12-02 11:37:20.075247','County',200,12,0,1,11,1),(113,'2020-12-02 11:37:20.076142','Origin',350,23,0,12,11,1),(114,'2020-12-02 11:37:20.082024','Tusker Cider',180,12,0,10,2,1),(115,'2020-12-02 12:04:54.799368','Kingstone',150,10,0,5,5,2),(116,'2020-12-02 12:04:54.800294','Smart',100,12,0,2,10,2),(117,'2020-12-02 12:04:54.802985','Tripple Ice',150,21,0,6,15,2);
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_summaries`
--

LOCK TABLES `stock_summaries` WRITE;
/*!40000 ALTER TABLE `stock_summaries` DISABLE KEYS */;
INSERT INTO `stock_summaries` VALUES (5,'2020-12-01 21:22:53.722876',6260,3450,2810,'umoja','[{\"id\":107,\"createdAt\":\"2020-12-01T18:22:09.689Z\",\"productName\":\"Smart\",\"unitPrice\":200,\"openingUnits\":10,\"addedUnits\":0,\"closingUnits\":\"3.5\",\"soldUnits\":6.5},{\"id\":108,\"createdAt\":\"2020-12-01T18:22:09.690Z\",\"productName\":\"K/King\",\"unitPrice\":180,\"openingUnits\":12,\"addedUnits\":0,\"closingUnits\":\"4.5\",\"soldUnits\":7.5},{\"id\":109,\"createdAt\":\"2020-12-01T18:22:09.691Z\",\"productName\":\"Kingstone\",\"unitPrice\":100,\"openingUnits\":21,\"addedUnits\":0,\"closingUnits\":\"13\",\"soldUnits\":8}]'),(6,'2020-12-02 12:05:19.781558',5850,4000,1850,'fair','[{\"id\":115,\"createdAt\":\"2020-12-02T09:04:54.799Z\",\"productName\":\"Kingstone\",\"unitPrice\":150,\"openingUnits\":10,\"addedUnits\":0,\"closingUnits\":\"5\",\"soldUnits\":5},{\"id\":116,\"createdAt\":\"2020-12-02T09:04:54.800Z\",\"productName\":\"Smart\",\"unitPrice\":100,\"openingUnits\":12,\"addedUnits\":0,\"closingUnits\":\"2\",\"soldUnits\":10},{\"id\":117,\"createdAt\":\"2020-12-02T09:04:54.802Z\",\"productName\":\"Tripple Ice\",\"unitPrice\":150,\"openingUnits\":21,\"addedUnits\":0,\"closingUnits\":\"6\",\"soldUnits\":15}]'),(7,'2020-12-02 18:54:53.265348',16010,9510,6500,'umoja','[{\"id\":110,\"createdAt\":\"2020-12-02T08:37:20.061Z\",\"productName\":\"Caribian\",\"unitPrice\":200,\"openingUnits\":12,\"addedUnits\":0,\"closingUnits\":\"1\",\"soldUnits\":11},{\"id\":111,\"createdAt\":\"2020-12-02T08:37:20.063Z\",\"productName\":\"Soda Pet\",\"unitPrice\":100,\"openingUnits\":10,\"addedUnits\":0,\"closingUnits\":\"1\",\"soldUnits\":9},{\"id\":112,\"createdAt\":\"2020-12-02T08:37:20.075Z\",\"productName\":\"County\",\"unitPrice\":200,\"openingUnits\":12,\"addedUnits\":0,\"closingUnits\":\"1\",\"soldUnits\":11},{\"id\":113,\"createdAt\":\"2020-12-02T08:37:20.076Z\",\"productName\":\"Origin\",\"unitPrice\":350,\"openingUnits\":23,\"addedUnits\":0,\"closingUnits\":\"12\",\"soldUnits\":11},{\"id\":114,\"createdAt\":\"2020-12-02T08:37:20.082Z\",\"productName\":\"Tusker Cider\",\"unitPrice\":180,\"openingUnits\":12,\"addedUnits\":0,\"closingUnits\":\"10\",\"soldUnits\":2}]');
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_route_driver`
--

LOCK TABLES `vehicle_route_driver` WRITE;
/*!40000 ALTER TABLE `vehicle_route_driver` DISABLE KEYS */;
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
  `unitPrice` int NOT NULL,
  `openingUnits` int NOT NULL,
  `closingUnits` int NOT NULL,
  `soldUnits` int NOT NULL DEFAULT '0',
  `vehicleId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_637bbb8f9fc3467c266e7709a96` (`vehicleId`),
  CONSTRAINT `FK_637bbb8f9fc3467c266e7709a96` FOREIGN KEY (`vehicleId`) REFERENCES `available_vehicles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_stock_info`
--

LOCK TABLES `vehicle_stock_info` WRITE;
/*!40000 ALTER TABLE `vehicle_stock_info` DISABLE KEYS */;
INSERT INTO `vehicle_stock_info` VALUES (1,'2020-11-23 09:04:12.657567','',1000,0,0,0,1),(2,'2020-11-23 09:39:03.220242','',50,0,0,0,1),(3,'2020-11-23 09:39:03.221385','',1200,0,0,0,1),(5,'2020-11-23 09:43:24.760557','',2500,0,0,0,4);
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

-- Dump completed on 2020-12-03 12:34:28
