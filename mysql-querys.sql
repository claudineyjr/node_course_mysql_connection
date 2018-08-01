CREATE DATABASE `nodeangular`;

USE `nodeangular`;

CREATE TABLE `nodeangular`.`aluno`(
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(250) NOT NULL,
  `birthday` DATE NOT NULL
);

INSERT INTO `nodeangular`.`aluno`
	(`name`, `birthday`)
VALUES
	('Claudiney Junior', '1988-10-24'),
  ('Roberto Mandolesi', '1990-01-01');

SELECT * FROM `aluno`;
