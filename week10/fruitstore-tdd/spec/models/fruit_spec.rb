require 'rails_helper'

RSpec.describe Fruit, type: :model do

  # it 'should belong to a shelf' do
  #   expect( Fruit ).to belong_to(:shelf)
  # end

  it { should belong_to(:shelf) }


  describe 'A Pear' do

    before do
      @pear = Pear.create name: 'Nashi'
    end

    it 'should create a valid fruit object' do
      pear = Fruit.find( @pear.id )

      expect( pear ).to_not be_nil
      # expect( pear ).to eq @pear
    end

    it 'should remember its name' do
      pear = Fruit.find( @pear.id )
      expect( pear.name ).to eq 'Nashi'
    end

    it 'should remember its class via Single Table Inheritance (STI)' do
      pear = Fruit.find( @pear.id )

      expect( pear.class ).to eq Pear
      expect( pear.is_a?(Fruit) ).to be true
      expect( pear.class.ancestors ).to include Fruit
    end

    it 'should be kind of squishy' do
      expect( @pear.squishy? ).to be true
    end

  end  # Pear

end
