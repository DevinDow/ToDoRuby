require 'test_helper'

class TasksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @list = lists(:empty)
    @task = tasks(:one)
  end

  test "should get index" do
    get tasks_url
    assert_response :success
  end

  test "should get new" do
    get new_list_task_url(@list)
    assert_response :success
  end

  test "should create task" do
    assert_difference('Task.count') do
      post list_tasks_url(@list), params: { task: { done: @task.done, name: @task.name, priority: @task.priority } }
    end

    assert_redirected_to list_url(@list)
  end

  test "should get edit" do
    get edit_task_url(@task)
    assert_response :success
  end

  test "should update task" do
    patch task_url(@task), params: { task: { done: @task.done, name: @task.name, priority: @task.priority } }
    assert_redirected_to list_url(@task.list)
  end

  test "should destroy task" do
    list = @task.list
    assert_difference('Task.count', -1) do
      delete task_url(@task)
    end

    assert_redirected_to list_url(list)
  end
end
