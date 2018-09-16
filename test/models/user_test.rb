require 'test_helper'

class UserTest < ActiveSupport::TestCase

  def setup
    @user = User.new(name: "Devin", email:"DevinDow@gmail.com")
  end

  test "the truth" do
    assert true
  end

  test "should be valid" do
    assert @user.valid?
  end

end
