ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'
require "minitest/reporters"

class ActiveSupport::TestCase
  puts Time.now

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Log in as a particular user.
  def log_in_as(user)
    cookies[:todo_id] = user.id
  end

  # Returns true if a test user is logged in.
  def is_logged_in?
    !cookies[:todo_id].blank?
  end

  # Minittest::Reporters::SpecReporter shows Test Classes & Test Names with Times
  #Minitest::Reporters.use! [Minitest::Reporters::SpecReporter.new(:color => true)]
end
