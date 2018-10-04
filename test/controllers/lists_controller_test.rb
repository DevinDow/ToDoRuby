require 'test_helper'

class ListsControllerTest < ActionDispatch::IntegrationTest

  setup do
    @user = users(:user_a)
    log_in_as @user

    @list1 = lists(:list1)
    @empty_list = lists(:empty_list)
    @shared_list = lists(:shared_list)
  end

  test "should get index" do
    get lists_url
    assert_response :success
  end

  test "should get new" do
    get new_list_url
    assert_response :success
  end

  test "should create list" do
    assert_difference('List.count') do
      post lists_url, params: { list: { name: @list1.name, use_timeframe: @list1.use_timeframe } }
    end

    assert_redirected_to list_url(List.last)
  end

  test "should show list" do
    get list_url(@list1)
    assert_response :success
  end

  test "should get edit" do
    get edit_list_url(@list1)
    assert_response :success
  end

  test "should update list" do
    patch list_url(@list1), params: { list: { name: @list1.name, use_timeframe: @list1.use_timeframe } }
    assert_redirected_to list_url(@list1)
  end

  test "should not destroy non-empty list" do
    delete list_url(@list1)
    assert_not_empty flash[:alert]
    assert_redirected_to list_url
  end

  test "should destroy empty list" do
    assert_difference('List.count', -1) do
      delete list_url(@empty_list)
    end
    assert_not_empty flash[:notice]
    assert_redirected_to root_url
  end

  test "list should be shared" do
    get sharees_list_url(@shared_list)
    assert_equal('b', response.body)
    assert_response :success
  end

  test "list should not be shared" do
    get sharees_list_url(@list1)
    assert_empty response.body
    assert_response :success
  end

end
