class Bank

  # gives us a getter called .name to return the value of @name
  # (also a setter, which we don't use)
  attr_accessor :name

  attr_reader   :accounts  # gives us ONLY a getter for @accounts

  def initialize( name )
    @name = name
    @accounts = {}
  end

  def create_account( account_name, amount=0 )
    @accounts[ account_name ] = amount
  end

  def deposit( account_name, amount )
    @accounts[ account_name ] += amount
  end

  def withdraw( account_name, amount )
    @accounts[ account_name ] -= amount if amount <= balance(account_name)
  end

  def balance( account_name )
    @accounts[account_name]
  end

end
