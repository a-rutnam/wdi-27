require 'rails_helper'

RSpec.describe Fruit, type: :feature do

  describe "Loading the index page #index (/fruits)" do

    before do
      3.times { |i| Fruit.create name: "Fruit number #{i}" }
      visit fruits_path  # go to /fruits
    end

    it 'should show the correct heading' do
      # expect( page ).to have_text( 'Fruits Index' )
      expect( page ).to have_css('div#heading > h1', text: 'Fruits Index')
    end

    it 'should list the fruits from the database' do
      expect( page ).to have_css('li.item', text: 'Fruit number 1')
    end

  end

end
