CREATE TABLE saude_dh.pacientes(
paciente_id INT NOT NULL,
paciente_idsaude INT NOT NULL,
paciente_nome VARCHAR(50),
paciente_sobrenome VARCHAR(50),
PRIMARY KEY (paciente_id)
);

CREATE TABLE especialidades(
especialidade_id INT NOT NULL,
especialidade_nome VARCHAR(100),
PRIMARY KEY (especialidade_id)
);

CREATE TABLE medicos (
medico_id INT NOT NULL,
medico_nome VARCHAR (50),
medico_sobrenome VARCHAR (50),
medico_especialidade INT NOT NULL,
PRIMARY KEY (medico_id),
CONSTRAINT FKespecialidade
FOREIGN KEY (medico_especialidade)
REFERENCES saude_dh.especialidades(especialidade_id)
);

CREATE TABLE consultas(
consulta_id INT NOT NULL,
paciente_id INT NOT NULL,
medico_id INT NOT NULL,
data_consulta DATE,
hora_consulta TIME,
PRIMARY KEY (consulta_id),
CONSTRAINT FKpaciente
FOREIGN KEY (paciente_id)
REFERENCES saude_dh.pacientes(paciente_id),
CONSTRAINT FKmedico
FOREIGN KEY (medico_id)
REFERENCES saude_dh.medicos(medico_id)
);