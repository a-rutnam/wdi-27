# Sydney Suburbs
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing (you should be able to give a custom response for at least 3 different suburbs).

puts "Which suburb do you live in?"
suburb = gets.chomp.downcase


response = case suburb
when "bondi"   then "Nice boat shoes, codger."
when "newport" then "Oh, so you're a white supremacist?"
when "manly"   then "Surf's up bro! Watch out for tourists."
when "newtown" then "Cool piercings. Smash the state."
else
  "I'm sure it's very nice there."
end
puts response

#
#
# if suburb == "bondi"
#   puts "Nice boat shoes, codger."
# elsif suburb == "newport"
#   puts "Oh, so you're a white supremacist?"
# elsif suburb == "manly"
#   puts "Surf's up bro! Watch out for tourists."
# elsif suburb == "newtown"
#   puts "Cool piercings. Smash the state."
# else
#   puts "I'm sure it's very nice there."
# end
