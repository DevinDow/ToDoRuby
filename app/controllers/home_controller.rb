class HomeController < ApplicationController

  # GET /
  def index
    @lists = List.all
  end

end
