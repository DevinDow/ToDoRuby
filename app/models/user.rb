class User < ApplicationRecord

  def initialize(attributes = {})
    super
    @email = attributes[:email]
  end
end
