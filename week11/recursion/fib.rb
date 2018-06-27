
def fib( n )

  a = 1
  b = 1

  n.times do
    temp = a
    a = b
    b = a + temp

    # a, b = b, (a + b)
  end
  a
end

# puts fib( 50 )


def fib_rec( n )
  if n < 2
    return 1
  else
    return fib_rec( n - 1) + fib_rec( n - 2 )
  end
end

def fib_rec_fast(n, a=1, b=1)
  if n < 2
    b
  else
    return fib_rec_fast(n-1, b, a+b)
  end
end




require 'pry'; binding.pry
puts "Yow!"
