
def countdown( n=10 )
  while n >= 0
    puts n
    n -= 1
    sleep 0.3
  end
  puts "Blast off!"
end

# countdown

# variables
# functions
# conditionals (if statements/branching)

def countdown_r( n )

  # define a base case
  # (condition under which function STOPS calling itself)
  if n < 0
    puts "Blast off!"
  else
    # recursive case
    # the function calls itself, but in a way that always
    # brings us a step closer to the terminating base case
    puts n
    sleep 0.3
    countdown_r( n - 1 )
  end
  puts "backing out of recursrion: n=#{n}"
end

countdown_r 10

puts "done"
