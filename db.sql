-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: gamehub
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

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
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
  `id` varchar(20) NOT NULL,
  `link` varchar(45) NOT NULL,
  `name` varchar(20) NOT NULL,
  `description` mediumtext,
  `genre` varchar(20) DEFAULT NULL,
  `thumbnail` varchar(45) NOT NULL,
  PRIMARY KEY (`id`,`link`,`name`,`thumbnail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES ('big-farm','https://thebigfarmgame.com/','The big farm game',NULL,'Simulation','bigfarm.jpeg'),('empire','https://theempiregame.com/','The empire game',NULL,'Strategy','empire.jpeg'),('flappy-bird','https://freeflappybird.org/','Flappy bird',NULL,'Arcade','flappybird.jpg'),('mahjong','https://freemahjong.org','Mahjong',NULL,'Puzzle','mahjong.png'),('mine-sweeper','https://freeminesweeper.org/','Mine sweeper',NULL,'Puzzle','minesweeper.png'),('pacman','https://freepacman.org/','Pacman',NULL,'Maze','pacman.jpg'),('pong','https://freepong.org','Pong',NULL,'Sports','pong.png'),('tetris','https://tetris.com/play-tetris','Tetris','Tetris® is the addictive puzzle game that started it all, embracing our universal desire to create order out of chaos. The Tetris game was created by Alexey Pajitnov in 1984—the product of Alexey’s computer programming experience and his love of puzzles. In the decades to follow, Tetris became one of the most successful and recognizable video games, appearing on nearly every gaming platform available. This page is the official destination for free online single-player Tetris. Click PLAY to start playing one of the world’s most popular puzzle games now!\\n\\nThe goal of Tetris is to score as many points as possible by clearing horizontal lines of Blocks. The player must rotate, move, and drop the falling Tetriminos inside the Matrix (playing field). Lines are cleared when they are filled with Blocks and have no empty spaces.\n\nAs lines are cleared, the level increases and Tetriminos fall faster, making the game progressively more challenging. If the Blocks land above the top of the playing field, the game is over.','Puzzle','tetris.jpg'),('wordle','https://freewordle.org','Wordle',NULL,'Puzzle','wordle.png');
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-09  8:57:40
