
CREATE TABLE animals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name  TEXT,
  last_name   TEXT,
  species     TEXT,
  description TEXT,
  roundness   INTEGER,  -- 0 to 10
  alive       BOOLEAN,
  age         INTEGER,
  image_url   TEXT
);

INSERT INTO animals( first_name, last_name, species, description, roundness, alive, age, image_url )
             VALUES( "Clarence", "Boddicker", "Human", "Baddie", 7, 0, 45, "https://vignette.wikia.nocookie.net/robocop/images/d/dc/ClarenceBoddicker.jpg/revision/latest?cb=20160816063931" );

INSERT INTO animals ( first_name, last_name, species, description, roundness, alive, age, image_url )
             VALUES( "Ruby",  "Tuesday", "Canine", "The best dog", 2, 1, 1, "https://images.unsplash.com/photo-1519138130-85a949fdcb4f?ixlib=rb-0.3.5&s=f340825cae4a33e3034dd209eb8c7355&w=1000&q=80" );

INSERT INTO animals( first_name, last_name, species, description, roundness, alive, age, image_url )
             VALUES( "Kermit", "Rondo", "Frog", "Damned Round", 9, 1, 2,  "https://i.imgur.com/hyGOReM.jpg");
