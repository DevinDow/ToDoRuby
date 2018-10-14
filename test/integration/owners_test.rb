require 'test_helper'

class OwnersTest < ActionDispatch::IntegrationTest
  SHARED_WITH = "SHARED WITH: "

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

  test "see SHARED WITH on Vue" do
    skip "need to test Vue Sharees Component output"
    log_in_as users(:user_a)
    get vue_path
    assert_match SHARED_WITH + users(:user_b).name, response.body
  end

  test "see SHARED WITH on React" do
    skip "need to test React Sharees Component output"
    log_in_as users(:user_a)
    get react_path
    assert_match SHARED_WITH + users(:user_b).name, response.body
  end

end
