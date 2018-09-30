class HomeController < ApplicationController
  before_action :require_logged_in_user, only: [:index]

  # GET /
  def index
    @lists = current_user.lists
    @sharees_per_list = Hash[
      @lists.map do |list|
        sharees = list.owners.select{|owner| owner.user != current_user}.map{|owner| owner.user.name}.join(', ')
        [list.id, sharees]
      end
    ]
  end

  # GET /about
  def about
    redirect_to flash_path, notice: 'This is a notice.'
  end

  # GET /flash
  def flashtest
    if flash.empty?
      flash[:alert] = "This is an alert"
      flash[:warning] = "This is a warning"
      flash[:danger] = "This is a danger"
      flash[:notice] = "This is a notice"
      flash[:info] = "This is a info"
      flash[:success] = "This is a success"
    end
  end

end
