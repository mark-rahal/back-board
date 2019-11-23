CREATE TABLE User (
	Id INT AUTO_INCREMENT PRIMARY KEY,
    UserType TINYINT(2) NOT NULL,
    PasswordHash CHAR(40),
    UserName VARCHAR(20) NOT NULL,
    Email VARCHAR(30) NOT NULL
);

CREATE TABLE Thread (
	Id INT AUTO_INCREMENT PRIMARY KEY,
    AuthorId INT,
    Title VARCHAR(50) NOT NULL,
    Body VARCHAR(2000) NOT NULL,
    ImgUrl VARCHAR(200),
    FOREIGN KEY(AuthorId) REFERENCES User(Id)
);

CREATE TABLE Reply (
	Id INT AUTO_INCREMENT PRIMARY KEY,
    ParentId INT,
    Body VARCHAR(2000) NOT NULL,
    ImgUrl VARCHAR(200),
    FOREIGN KEY(ParentId) REFERENCES Thread(Id)
);

CREATE TABLE ReplyMap (
	Id INT AUTO_INCREMENT PRIMARY KEY,
    ReplyId INT,
    ReferencedReply INT,
    FOREIGN KEY(ReplyId) REFERENCES Reply(Id),
    FOREIGN KEY(ReferencedReply) REFERENCES Reply(Id)
);