module SessionsHelper

  # Store user.id in permanent cookies.
  def log_in(user)
    cookies.permanent[:user_id] = user.id
  end

  # Clear :user_id from cookies.
  def log_out
    cookies.delete(:user_id)
  end

   # Returns the current logged-in user (if any).
   def current_user
    if cookies[:user_id]
      User.find_by(id: cookies[:user_id])
    end
  end

  # Returns true if the user is logged in, false otherwise.
  def logged_in?
    !current_user.nil?
  end

end
