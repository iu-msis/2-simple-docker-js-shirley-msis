USE msis;
CREATE TABLE Comments (
 id INTEGER AUTO_INCREMENT,
 commentText TEXT NOT NULL,
 PRIMARY KEY (id)
 );

 INSERT INTO Comments (commentText)
 VALUES ('I have something important to say');

 INSERT INTO Comments (commentText)
 VALUES ('D&S is awesome');

 INSERT INTO Comments (commentText)
 VALUES ('😁');
