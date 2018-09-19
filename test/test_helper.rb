ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'
require "minitest/reporters"

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Returns true if a test user is logged in.
  def is_logged_in?
    !cookies[:user_id].blank?
  end

  # Minittest::Reporters::SpecReporter shows Test Classes & Test Names with Times
  #Minitest::Reporters.use! [Minitest::Reporters::SpecReporter.new(:color => true)]
end
