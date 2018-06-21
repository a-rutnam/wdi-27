require 'rails_helper'

RSpec.describe FruitsController, type: :controller do


  describe "GET #index" do

    before do
      3.times { |i| Fruit.create name: "Fruit number #{i}" }
    end

    describe 'GET #index (/fruits) in HTML format' do

      before do
        get :index
      end

      it 'returns http success' do
        expect(response).to have_http_status( 200 )
      end

      it 'should render the index view' do
        expect( response ).to render_template( :index )
      end

      it "should assign the instance variable @fruits which contains all the Fruits in reverse order" do

        expect( assigns(:fruits) ).to be
        expect( assigns(:fruits).length ).to eq 3
        expect( assigns(:fruits).first.class ).to eq Fruit
        expect( assigns(:fruits).first.name ).to eq 'Fruit number 2'

      end

    end # HTML GET to #index

    describe "GET #index (/fruits) in JSON format" do

      before do
        get :index, format: :json
      end

      it 'should return HTTP success' do
        expect( response ).to have_http_status( 200 )
      end

      it 'should provide the name of the fruits in the JSON response' do
        fruits = JSON.parse( response.body )
        expect( fruits.length ).to eq 3
        expect( fruits.first['name'] ).to eq 'Fruit number 2'
      end


    end # describe GET /index JSON

  end

  describe "POST to #create (/fruits)" do

    describe "a fruit with valid information" do

      before do
        post :create, params: { fruit: { name: 'Strawberry' } }
      end

      it 'should increase the number of fruits in the database' do
        expect( Fruit.count ).to eq 1
      end

      it 'should save the correct name of the fruit to the database' do
        expect( Fruit.first.name ).to eq 'Strawberry'
      end

      it 'should redirect to the show action' do
        expect( response ).to redirect_to( Fruit.last )
        # (Fruit.last in a redirect context defaults to the show page for this model,
        # i.e. /fruits/:id)
      end

    end  # valid POST

    describe "a fruit with invalid information" do

      before do
        post :create, params: { fruit: { name: '' } }
      end

      it 'should not increase the number of fruits in the database' do
        expect( Fruit.count ).to eq 0
      end

      it 'should rerender the #new template' do
        expect( response ).to render_template( :new )
      end


    end # invalid POST


  end



end
