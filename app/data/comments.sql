USE msis;
CREATE TABLE Comments (
 id int AUTO_INCREMENT,
 commentText varchar(255),
 PRIMARY KEY (id)
 );

 INSERT INTO Comments (commentText)
 VALUES ('I have something important to say');

 INSERT INTO Comments (commentText)
 VALUES ('D&S is awesome');

 INSERT INTO Comments (commentText)
 VALUES ('😁');
