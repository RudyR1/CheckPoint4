DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `roles`;
DROP TABLE IF EXISTS `books`;

CREATE TABLE roles (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  role varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO roles (role) VALUES ('user'), ('admin');

CREATE TABLE users (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  email varchar(255) UNIQUE NOT NULL,
  role_id int NOT NULL, 
  FOREIGN KEY (role_id) REFERENCES roles(id),
  hpassword varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO users (firstname, lastname, email, role_id, hpassword)
VALUES
(
  'Rudy',
  'R',
  'rr@book.com',
  1,
  'test'
),
(
  'Zou',
  'Z',
  'zz@book.com',
  2,
  'test'
),
(
  'book',
  'took',
  'bt@book.com',
  1,
  '$argon2id$v=19$m=65536,t=3,p=1$dSggroykTNrzQ42lvc/wzQ$buODgm3/xy0pdQsUOzATI+D2XzyreMNjmFmgbEBZ6XQ'
),
(
  'ru',
  'ra',
  'rura@book.com',
  2,
  '$argon2id$v=19$m=65536,t=3,p=1$BFrmBfSd6fhsk8j1ojySZQ$RY/PyL+WEFxILUWY0o+seFk3YycmAZTdqhwg3h5x/98'
);

CREATE TABLE books (
  id int(11) primary key NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  authors varchar(50) NOT NULL,
  description varchar(255) NOT NULL,
  cover varchar(255) NOT NULL,
  genres VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO books (title, authors, description, cover, genres)
VALUES
(
  'The Hunger Games',
  'Suzanne Collins',
  'Winning will make you famous. Losing means certain death.The nation of Panem, formed from a post-apocalyptic North America, is a country that consists of a wealthy Capitol region surrounded by 12 poorer districts. Early in its history, a rebellion led by a 13th district against the Capitol resulted in its destruction and the creation of an annual televised event known as the Hunger Games. In punishment, and as a reminder of the power and grace of the Capitol, each district must yield one boy and one girl between the ages of 12 and 18 through a lottery system to participate in the games. The tributes are chosen during the annual Reaping and are forced to fight to the death, leaving only one survivor to claim victory.When 16-year-old Katniss s young sister, Prim, is selected as District 12s female representative, Katniss volunteers to take her place. She and her male counterpart Peeta, are pitted against bigger, stronger representatives, some of whom have trained for this their whole lives. , she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.',
  'https://images.gr-assets.com/books/1447303603l/2767052.jpg',
  'Young Adult, Fiction, Science Fiction, Dystopia, Fantasy, Science Fiction'
),
(
  'Harry Potter and the Order of the Phoenix',
  'J.K. Rowling',
  'There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror?Harry has a lot on his mind for this, his fifth year at Hogwarts: a Defense Against the Dark Arts teacher with a personality like poisoned honey; a big surprise on the Gryffindor Quidditch team; and the looming terror of the Ordinary Wizarding Level exams. But all these things pale next to the growing threat of He-Who-Must-Not-Be-Named---a threat that neither the magical government nor the authorities at Hogwarts can stop.As the grasp of darkness tightens, Harry must discover the true depth and strength of his friends, the importance of boundless loyalty, and the shocking price of unbearable sacrifice.His fate depends on them alll.(back cover)',
  'https://images.gr-assets.com/books/1255614970l/2.jpg',
  'Fantasy, Young Adult, Fiction'
),
(
  'The Alchemist',
  'Paulo Coelho',
  "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along lifes path, and, most importantly, to follow our dreams.",
  'https://images.gr-assets.com/books/1483412266l/865.jpg',
  'Fiction, Classics, Fantasy, Philosophy, Novels, Spirituality, Literature, Inspirational, Adventure, Self Help'
),
(
  'A Game of Thrones',
  'George R.R. Martin',
  "Here is the first volume in George R. R. Martin’s magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords. As a whole, this series comprises a genuine masterpiece of modern fantasy, bringing together the best the genre has to offer. Magic, mystery, intrigue, romance, and adventure fill these pages and transport us to a world unlike any we have ever experienced. Already hailed as a classic, George R. R. Martin’s stunning series is destined to stand as one of the great achievements of imaginative fiction.A GAME OF THRONESLong ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister and supernatural forces are massing beyond the kingdom’s protective Wall. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the land they were born to. Sweeping from a land of brutal cold to a distant summertime kingdom of epicurean plenty, here is a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens.Here an enigmatic band of warriors bear swords of no human metal; a tribe of fierce wildlings carry men off into madness; a cruel young dragon prince barters his sister to win back his throne; and a determined woman undertakes the most treacherous of journeys. Amid plots and counterplots, tragedy and betrayal, victory and terror, the fate of the Starks, their allies, and their enemies hangs perilously in the balance, as each endeavors to win that deadliest of conflicts: the game of thrones.source: georgerrmartin.com",
  'https://images.gr-assets.com/books/1436732693l/13496.jpg',
  'Fantasy, Fiction, Fantasy, Epic Fantasy'
),
(
  'The Color Purple',
  'Alice Walker',
  "The Color Purple is a classic. With over a million copies sold in the UK alone, it is hailed as one of the all-time 'greats' of literature, inspiring generations of readers.Set in the deep American South between the wars, it is the tale of Celie, a young black girl born into poverty and segregation. Raped repeatedly by the man she calls 'father', she has two children taken away from her, is separated from her beloved sister Nettie and is trapped into an ugly marriage. But then she meets the glamorous Shug Avery, singer and magic-maker - a woman who has taken charge of her own destiny. Gradually, Celie discovers the power and joy of her own spirit, freeing her from her past and reuniting her with those she loves.",
  'https://images.gr-assets.com/books/1386925078l/11486.jpg',
  'Classics, Fiction, Historical, Historical Fiction, Feminism'
),
(
  'Dune',
  'Frank Herbert',
  "Set in the far future amidst a sprawling feudal interstellar empire where planetary dynasties are controlled by noble houses that owe an allegiance to the imperial House Corrino, Dune tells the story of young Paul Atreides (the heir apparent to Duke Leto Atreides and heir of House Atreides) as he and his family accept control of the desert planet Arrakis, the only source of the 'spice' melange, the most important and valuable substance in the cosmos. The story explores the complex, multi-layered interactions of politics, religion, ecology, technology, and human emotion as the forces of the empire confront each other for control of Arrakis.Published in 1965, it won the Hugo Award in 1966 and the inaugural Nebula Award for Best Novel. Dune is frequently cited as the world's best-selling sf novel.",
  'https://images.gr-assets.com/books/1434908555l/234225.jpg',
  'Science Fiction, Fiction, Fantasy, Classics'
);

