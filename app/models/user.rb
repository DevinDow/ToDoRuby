class User < ApplicationRecord

  def initialize(attributes = {})
    super
    unless attributes.nil?
      @email = attributes[:email]
    end
  end
end
