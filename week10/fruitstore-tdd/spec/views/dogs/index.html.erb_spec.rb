require 'rails_helper'

RSpec.describe "dogs/index", type: :view do
  before(:each) do
    assign(:dogs, [
      Dog.create!(
        :name => "Name",
        :roundness => 2
      ),
      Dog.create!(
        :name => "Name",
        :roundness => 2
      )
    ])
  end

  it "renders a list of dogs" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
  end
end
