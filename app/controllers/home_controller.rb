class HomeController < ApplicationController

  # GET /
  def index
    @lists = List.includes(:tasks).order(:name).all
  end

end
