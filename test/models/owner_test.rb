require 'test_helper'

class OwnerTest < ActiveSupport::TestCase

  def setup
    @owner = Owner.new(user_id: users(:user_a).id, list_id: lists(:list1).id)
  end

  test "should be valid" do
    assert @owner.valid?
  end

  test "should require a user_id" do
    @owner.user_id = nil
    assert_not @owner.valid?
  end

  test "should require a list_id" do
    @owner.list_id = nil
    assert_not @owner.valid?
  end

end
