module SessionsHelper

  # Logs in the given user.
  def log_in(user)
    cookies.permanent[:user_id] = user.id
  end

   # Returns the current logged-in user (if any).
   def current_user
    if cookies[:user_id]
      @current_user ||= User.find_by(id: cookies[:user_id])
    end
  end

  # Returns true if the user is logged in, false otherwise.
  def logged_in?
    !current_user.nil?
  end

  # Logs out the current user.
  def log_out
    cookies.delete(:user_id)
    @current_user = nil
  end

end
