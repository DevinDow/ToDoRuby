class List < ApplicationRecord
  has_many :tasks, -> { order(:priority, :updated_at)}
end
