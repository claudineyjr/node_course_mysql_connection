CREATE DATABASE `curso`;

USE `curso`;

CREATE TABLE `curso`.`alunos`(
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(250) NOT NULL,
  `birthday` DATE NOT NULL
);

INSERT INTO `curso`.`alunos`
	(`name`, `birthday`)
VALUES
	('Claudiney Junior', '1988-10-24'),
  ('Roberto Mandolesi', '1990-01-01');

SELECT * FROM `alunos`;
