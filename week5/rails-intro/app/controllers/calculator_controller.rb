
class CalculatorController < ApplicationController

  def home
  end

  def do_calc
    # result = x + y  # templates can only see instance variables
    @first = params[:first].to_i
    @second = params[:second].to_i
    @op     = params[:op]

    # @op = "/" if @op == "div"  # not necessary! 6.div(3) works!

    @result = @first.send(@op, @second)  # 5.+( 3 )  === 5 + 3
  end

end
