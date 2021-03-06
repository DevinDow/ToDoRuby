require 'test_helper'

class UsersLoginTest < ActionDispatch::IntegrationTest

  def setup
    @user = users(:user_a)
  end

  test "invalid credentials" do
    get login_path
    assert_template 'sessions/new'
    post login_path, params: { session: { email: "", password: "" } }
    assert_template 'sessions/new'
    assert_not flash.empty?
    get root_path
    assert flash.empty?
  end

  test "login with valid credentials followed by logout" do
    #login
    get login_path
    assert_template 'sessions/new'
    post login_path, params: { session: { email: @user.email, password: "password" } }
    assert is_logged_in?
    assert_redirected_to root_path
    follow_redirect!
    # check for appropriate menus
    assert_select "a[href=?]", login_path, count: 0
    assert_select "a[href=?]", logout_path

    # logout
    delete logout_path
    assert_not is_logged_in?
    assert_redirected_to login_url
    # simulate logout from a second window
    delete logout_path
    follow_redirect!
    # check for appropriate menus
    assert_select "a[href=?]", login_path
    assert_select "a[href=?]", logout_path,      count: 0
  end

end
