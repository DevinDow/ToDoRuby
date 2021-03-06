class ListsController < ApplicationController
  before_action :require_logged_in_user
  before_action :set_list, only: [:show, :sharees, :edit, :update, :destroy]
  before_action :set_sharees, only: [:show, :sharees]

  # GET /lists
  # GET /lists.json
  def index
    @lists = current_user.lists
  end

  # GET /lists/1
  # GET /lists/1.json
  def show
  end

  # GET /lists/1/sharees.json
  def sharees
    render plain: @sharees
  end

  # GET /lists/new
  def new
    @list = List.new
  end

  # GET /lists/1/edit
  def edit
  end

  # POST /lists
  # POST /lists.json
  def create
    @list = List.new(list_params)

    respond_to do |format|
      if @list.save
        @list.owners.create(user_id: current_user.id)
        format.html { redirect_to @list, notice: 'List was successfully created.' }
        format.json { render :show, status: :created, location: @list }
      else
        format.html { render :new }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /lists/1
  # PATCH/PUT /lists/1.json
  def update
    respond_to do |format|
      if @list.update(list_params)
        format.html { redirect_to @list, notice: 'List was successfully updated.' }
        format.json { render :show, status: :ok, location: @list }
      else
        format.html { render :edit }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lists/1
  # DELETE /lists/1.json
  def destroy
    if @list.tasks.count > 0
      redirect_to list_url, alert: 'List contains Tasks that must be deleted before the List can be deleted.'
      return
    end
    @list.destroy
    respond_to do |format|
      format.html { redirect_to root_path, notice: 'List was successfully destroyed.' }
      format.json { head :no_content }
    end
  end


  private
    def set_list
      @list = List.find(params[:id])
    end

    def set_sharees
      @sharees = @list.owners.select{|owner| owner.user != current_user}.map{|owner| owner.user.name}.join(', ')
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def list_params
      params.require(:list).permit(:name, :use_timeframe)
    end

end
