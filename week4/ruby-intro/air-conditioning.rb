# Air Conditioning
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
  # If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

puts "What is the current temp?"
current_temp = gets.to_f

puts "Is the A/C functional? (y/n)"
ac_working = gets.chomp.downcase   # convert to lower case to make conditional simpler

puts "What is the desired temp?"
desired_temp = gets.to_f

p current_temp, ac_working, desired_temp

if ac_working == "y"
  if current_temp > desired_temp
    puts "Turn on the A/C please!"
  end
else
  # ac not working
  if current_temp > desired_temp
    puts "Please fix the A/C, it's hot dangit!"
  else
    puts "Fix the A/C at some point, no rush man"
  end
end
