require 'test_helper'

class TasksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:user_a)
    log_in_as @user

    @empty_list = lists(:empty_list)

    @task1a = tasks(:task1a)
  end

  test "should get all" do
    get tasks_url
    assert_response :success
  end

  test "should get index" do
    get list_tasks_url(@empty_list)
    assert_response :success
  end

  test "should get new" do
    get new_list_task_url(@empty_list)
    assert_response :success
  end

  test "should create task" do
    assert_difference('Task.count') do
      post list_tasks_url(@empty_list), params: { task: { done: @task1a.done, name: @task1a.name, priority: @task1a.priority } }
    end

    assert_redirected_to list_url(@empty_list)
  end

  test "should show task" do
    get task_url(@task1a)
    assert_response :success
  end

  test "should get edit" do
    get edit_task_url(@task1a)
    assert_response :success
  end

  test "should update task" do
    patch task_url(@task1a), params: { task: { done: @task1a.done, name: @task1a.name, priority: @task1a.priority } }
    assert_redirected_to list_url(@task1a.list)
  end

  test "should destroy task" do
    list = @task1a.list
    assert_difference('Task.count', -1) do
      delete task_url(@task1a)
    end

    assert_redirected_to list_url(list)
  end
end
