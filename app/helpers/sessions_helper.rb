module SessionsHelper

  # Store user.id in permanent cookies.
  def log_in(user)
    puts '*** log_in ' + user.inspect 
    cookies.permanent[:todo_user_id] = user.id
  end

  # Clear :todo_user_id from cookies.
  def log_out
    cookies.delete(:todo_user_id)
  end

   # Returns the current logged-in user (if any).
   def current_user
    puts '*** current_user '
    if cookies[:todo_user_id]
      puts cookies[:todo_user_id]
      User.find_by(id: cookies[:todo_user_id])
    else
      puts 'no logged-in cookie'
    end
  end

  # Returns true if the user is logged in, false otherwise.
  def logged_in?
    !current_user.nil?
  end

  # Confirms a logged-in user.
  def require_logged_in_user
    unless logged_in?
      #flash[:warning] = "Please log in."
      redirect_to login_url
    end
  end

end
