require 'spec_helper'

describe Basket do
  it 'should create an instance of a basket' do
    s = Basket.create(user_id: 9001, name: "Space themes")
    expect(s.user_id).to eq(9001)
    expect(s.name).to eq("Space themes")
  end
end