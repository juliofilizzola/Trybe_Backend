USE zoo;

CREATE TABLE animal (
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    idade INT NOT NULL,
    cuidador_id INT NOT NULL,
    especie_id INT NOT NULL,
    location_id INT NOT NULL,
    FOREIGN KEY (especie_id) REFERENCES especie(especie_id),
    FOREIGN KEY (location_id) REFERENCES LOCATION(location_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id)
)ENGINE=InnoDB;

CREATE TABLE especie (
	especie_id INT PRIMARY KEY AUTO_INCREMENT,
    especie_name VARCHAR(150) NOT NULL 
)ENGINE=InnoDB;

CREATE TABLE LOCATION (
	location_id INT PRIMARY KEY AUTO_INCREMENT,
    name_location VARCHAR(150) NOT NULL
);

CREATE TABLE gerente (
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    name_gerente VARCHAR(50) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE cuidador(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome_cuidador VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
)ENGINE=InnoDB;