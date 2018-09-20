class List < ApplicationRecord
  has_many :tasks, -> { order(:priority, :updated_at)}
  has_many :owners, dependent: :destroy
end
