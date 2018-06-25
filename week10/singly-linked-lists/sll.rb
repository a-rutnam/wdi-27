
require 'pry'

# TODO: Research using 'Struct' to create a new Class with simple attributes
# Node = Struct.new( :value, :next )


class SinglyLinkedList

  include Enumerable

  attr_accessor :head

  class Node
    attr_accessor :value, :next

    def initialize( value )
      @value = value
      @next = nil
    end

  end  # Node


  def initialize( value=nil )
    # create a new instance of the Node class, pass on the value to it, and set it as the @head of the list
    # (make the value optional so methods like reverse
    # are easier to write)
    @head = Node.new( value ) if value
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

  alias_method :unshift, :prepend

  def last
    node = @head
    while node && node.next
      node = node.next   #  i += 1
    end
    node
  end

  def to_s
    output = ''
    # node = @head
    # while node
    #   output += node.value  + ', '
    #   node = node.next
    # end
    each do |node|
      output += node.value
      output += ', ' unless node.next == nil
    end
    output
  end

  def at_index( n )
    # returns Node object at position n in list
  end

  def find( needle )
    # returns Node object whose value == needle
    # node = @head
    # while node
    #   return node if node.value == needle
    #   node = node.next
    # end
    each { |node| return node if node.value == needle }
  end

  def shift
    # removes the first element of the list and returns its value (destructive, i.e. changes list)
    old_head = @head
    @head = @head.next
    old_head.next = nil # break connection to the list
    old_head
  end


  def length
    # returns the length of the list
    # node = @head
    # n = 0
    # while node
    #   n += 1
    #   node = node.next
    # end
    n = 0
    each { n+= 1 }
    n
  end


  def insert_after( node, value )
    # insert a new node after the given node argument, with the given value
    # returns new node
    new_node = Node.new value
    new_node.next = node.next
    node.next = new_node
  end

  def to_a
    # turn our SLL into an array of values and return it
    arr = []
    # node = @head
    # while node
    #   arr << node.value
    #   node = node.next
    # end
    each { |node| arr << node.value }
    arr
  end

  def array_to_list( arr )
    # ?????????
  end

  def reverse
    # return a reversed version of the list, without changing list itself

    # one way to avoid the dangling 'nil':
    # reversed = SinglyLinkedList.new @head.value
    # node = @head.next

    # this requires the value for the initialize method to be optional
    # reversed = SinglyLinkedList.new
    # node = @head
    # while node
    #   # take each node from the current list in forward
    #   # order, and prepend it to the new list -
    #   # automatically reverses!
    #   reversed.prepend node.value
    #   node = node.next
    # end
    reversed = SinglyLinkedList.new
    each { |node| reversed.prepend node.value }
    reversed
  end

  def reverse!
    # destructive version: returns a reversed version of list, and sets list itself to that
    @head = reverse.head
  end

  def each
    # takes a block, and applies block to each node in list (i.e. node is provided as goalpost arg to block)
    # HINT: look up 'yield'
    return nil unless block_given?
    node = @head
    index = 0
    while node
      yield node, index  # node becomes first goalpost arg to block
      node = node.next
      index += 1
    end
  end

  def at_index( n )
    each { |node, index| return node if index == n }
  end

  # def map
  #   return nil unless block_given?
  #   arr = []  # TODO: return a list instead?
  #   each { |node| arr << yield(node)  }
  #   arr
  # end

  # bonus for the showoffs: map, inject


end

list = SinglyLinkedList.new 'Groucho'
list.append 'Harpo'
list.append 'Chico'
list.prepend 'Zeppo'

binding.pry

puts "done"
