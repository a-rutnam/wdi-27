a = [1,2,3,4,5,6] # (1..6).to_a

# a.each do |elem|
#   puts elem
# end

def recursive_iterate( arr, indent=0 )

  # remove the first element from the array and print it
  # - if there are any elements left in the array
  #   call ourselves again with the shorter array

  # first = arr.shift   # mutates the arg (a)

  # first = arr.first
  # rest = arr[1..-1]

  first, *rest = arr  # JS: const [first, ...rest] = arr;

  spaces = "    " * indent

  puts "#{ spaces } recursive_iterate( #{ arr.to_s })"
  puts "#{ spaces } first: #{ first }"
  puts "#{ spaces } rest:  #{ rest.to_s }"
  # puts first

  if rest.any?
    recursive_iterate( rest, indent+1 )
  end

  puts "#{ spaces } --- returning from recursive_iterate( #{ arr.to_s} ), first: #{ first }"

end

recursive_iterate( a )
