
$really_global = 10

class Person

  @@people = 0 # class variable, visible to all objects of that class

  # automatically create getter and setter methods for @name and @age
  attr_accessor :name, :age

  # # GETTER for @name instance variable
  # def name
  #   @name
  # end
  #
  # # SETTER for @name
  # def name=( new_name )
  #   @name = new_name
  # end

  # This is a class method: you define it with 'def self.methodname' and the method
  # is called on the class directly, without needing to create an instance (object)
  # from the class first.
  # I.e. you call
  # > Person.describe
  # instead of
  # > p = Person.new("Grant", 30)
  # > p.describe   # will not work (NoMethodError)
  def self.describe
    # Class methods do *not* have access to instance variables so the line below
    # will print "Greetings, I am  "
    puts "Greetings, I am #{ @name }"
  end

  # The 'initialize' method is run when we do 'Person.new("Name")'
  # The second argument 'age' is optional, and will default to 20 if not given
  def initialize( name, age=20 )
    puts "Making a new person object!! #{ $really_global }"
    @name = name
    @age = age
    @@people += 1
    $test = "test"
  end

  def say_hello
    puts "Hi! I'm a person."
    puts "My name is #{ @name }, I am number #{ @@people }"
  end

  def laugh
    puts "Hahahahaha! Nice one!"
  end

  def die
    puts "Uuuuuhggghhh why me?!"
  end

end

class Comedian < Person

  def tell_joke
    print "What's brown and sticky?"
    3.times do
      print "."
      sleep 0.4
    end
    puts "A stick"
  end

  # Here the Comedian class is defining its own version of the 'laugh' method,
  # overriding the one defined in the parent/super class Person
  def laugh
    puts "Hahaha I'm so funny!"
    super # also run the laugh method from the superclass Person
  end
end

class SerialKiller < Person

  def laugh
    puts "MUUAHAHAHAHAHAHA"
  end

  def taunt_police
    puts "You will never catch me!"
  end

  def kill( victim )
    # return early with an error if the object passed in as an argument
    # does not have the 'die' method defined on it
    return "Immortal!" unless victim.respond_to? :die
    victim.die
    puts "u ded"
  end

end


require 'pry'; binding.pry
puts "Done!"
