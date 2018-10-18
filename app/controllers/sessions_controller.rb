class SessionsController < ApplicationController

  # GET /login
  def new
  end

  # POST /login
  def create
    user = User.find_by(email: params[:session][:email].downcase)
    respond_to do |format|
      if user && user.authenticate(params[:session][:password])
        # Log the user in and redirect to the user's show page.
        log_in user
        format.html { redirect_to root_url }
        format.json { render json: {user: cookies[:todo_user_id]}, status: :created }
      else
        format.html { 
          flash.now[:danger] = 'Invalid email/password combination'
          render 'new'
         }
        format.json { render json: {message: 'failed'}, status: :bad }
      end
    end
  end

  # DELETE /logout
  def destroy
    log_out
    redirect_to login_url
  end

end
