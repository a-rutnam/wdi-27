-- migration file to add animal_id to spotters
ALTER TABLE spotters ADD COLUMN animal_id INTEGER;
