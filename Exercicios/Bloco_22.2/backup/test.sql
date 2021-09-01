-- MySQL dump 10.13  Distrib 8.0.26, for Linux (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	8.0.26-0ubuntu0.20.04.2

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
-- Table structure for table `BoxOffice`
--

DROP TABLE IF EXISTS `BoxOffice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BoxOffice` (
  `movie_id` int DEFAULT NULL,
  `rating` decimal(2,1) NOT NULL,
  `domestic_sales` int NOT NULL,
  `international_sales` int NOT NULL,
  KEY `movie_id` (`movie_id`),
  CONSTRAINT `BoxOffice_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BoxOffice`
--

LOCK TABLES `BoxOffice` WRITE;
/*!40000 ALTER TABLE `BoxOffice` DISABLE KEYS */;
INSERT INTO `BoxOffice` VALUES (1,8.3,190000000,170000000),(2,7.2,160000000,200600000),(3,7.9,245000000,239000000),(4,6.1,330000000,540000000),(5,7.8,140000000,310000000),(6,5.8,540000000,600000000),(7,7.5,250000000,190000000),(8,8.5,300000000,250000000),(10,7.4,460000000,510000000),(9,6.8,450000000,370000000),(11,9.9,290000000,280000000);
/*!40000 ALTER TABLE `BoxOffice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Movies`
--

DROP TABLE IF EXISTS `Movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `director` varchar(30) DEFAULT NULL,
  `year` int NOT NULL,
  `length_minutes` int NOT NULL,
  `theater_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `theater_id` (`theater_id`),
  CONSTRAINT `Movies_ibfk_1` FOREIGN KEY (`theater_id`) REFERENCES `Theater` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Movies`
--

LOCK TABLES `Movies` WRITE;
/*!40000 ALTER TABLE `Movies` DISABLE KEYS */;
INSERT INTO `Movies` VALUES (1,'Toy Story','John Lasseter',1995,81,1),(2,'Vida de inseto','Andrew Staton',1998,95,3),(3,'Ratatuille','Brad Bird',2010,115,NULL),(4,'UP','Pete Docter',2009,101,2),(5,'Carros','John Lasseter',2006,117,NULL),(6,'Toy Story 2','John Lasseter',1999,93,5),(7,'Valente','Brenda Chapman',2012,98,NULL),(8,'Monstros SA','Pete Docter',2001,92,NULL),(9,'Procurando Nemo','Jon Lasseter',2003,107,4),(10,'Os Incríveis','Brad Bird',2004,116,NULL),(11,'WALL-E','Pete Docter',2008,104,NULL);
/*!40000 ALTER TABLE `Movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Theater`
--

DROP TABLE IF EXISTS `Theater`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Theater` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `location` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Theater`
--

LOCK TABLES `Theater` WRITE;
/*!40000 ALTER TABLE `Theater` DISABLE KEYS */;
INSERT INTO `Theater` VALUES (1,'Cinemark','São Paulo'),(2,'Brodway theater','Nova York'),(3,'Phoenix theater','Londres'),(4,'Le Champo','Paris'),(5,'TLC Chinese Theater','Los Angeles'),(6,'Regal Tikahtnu','Alaska');
/*!40000 ALTER TABLE `Theater` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-01 10:37:26
