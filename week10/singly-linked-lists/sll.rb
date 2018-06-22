
require 'pry'

# TODO: Research using 'Struct' to create a new Class with simple attributes
# Node = Struct.new( :value, :next )


class SinglyLinkedList

  attr_accessor :head

  class Node
    attr_accessor :value, :next

    def initialize( value )
      @value = value
      @next = nil
    end

  end  # Node


  def initialize( value )
    # create a new instance of the Node class, pass on the value to it, and set it as the @head of the list
    @head = Node.new( value )
  end

  # equivalent of .push(value)
  def append( value )
    last.next = Node.new( value )
  end

  # same as .unshift(value)
  def prepend( value )
    new_node = Node.new( value )
    new_node.next = @head
    @head = new_node
  end

  def last
    node = @head
    while node && node.next
      node = node.next   #  i += 1
    end
    node
  end

  def to_s
    output = ''
    node = @head
    while node
      output += node.value  + ', '
      node = node.next
    end
    output
  end

  def at_index( n )
    # returns Node object at position n in list
  end

  def find( needle )
    # returns Node object whose value == needle
  end

  def shift
    # removes the first element of the list and returns its value (destructive, i.e. changes list)
  end

  def insert_after( node, value )
    # insert a new node after the given node argument, with the given value
    # returns new node
  end

  def length
    # returns the length of the list
  end

  def reverse
    # return a reversed version of the list, without changing list itself
  end

  def reverse!
    # destructive version: returns a reversed version of list, and sets list itself to that
  end

  def each
    # takes a block, and applies block to each node in list (i.e. node is provided as goalpost arg to block)
    # HINT: look up 'yield'
  end


  # bonus for the showoffs: map, inject


end

list = SinglyLinkedList.new 'Groucho'
list.append 'Harpo'
list.append 'Chico'
list.prepend 'Zeppo'

binding.pry

puts "done"
