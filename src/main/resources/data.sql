DROP TABLE IF EXISTS task;

CREATE TABLE TASK (
  id INT PRIMARY KEY,
  NAME VARCHAR(250) NOT NULL,
  DESCRIPTION VARCHAR(250) NOT NULL,
  LAST_UPDATED_ON DATETIME
);
