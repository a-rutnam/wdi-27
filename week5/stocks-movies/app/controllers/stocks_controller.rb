
class StocksController < ApplicationController

  def search_form
  end

  def search_results
    @code = params[:stock_symbol]
    @result = StockQuote::Stock.quote( @code )
    # raise 'hell'
  end

end
