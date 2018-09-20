require 'test_helper'

class OwnersTest < ActionDispatch::IntegrationTest
  SHARED_WITH = "SHARED WITH: "

  test "see SHARED WITH on index" do
    log_in_as users(:user_a)
    get root_path
    assert_match SHARED_WITH + users(:user_b).name, response.body
  end

  test "see SHARED WITH on shared_list" do
    log_in_as users(:user_a)
    get list_path lists(:shared_list)
    assert_match SHARED_WITH + users(:user_b).name, response.body
  end

  test "don't see SHARED WITH on list1" do
    log_in_as users(:user_a)
    get list_path lists(:list1)
    assert_no_match SHARED_WITH, response.body
  end

end
