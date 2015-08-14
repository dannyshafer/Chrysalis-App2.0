require 'spec_helper'

describe User do
  it 'should create an instance of a user' do
    @s = User.create(uid: "Name", handle: "handle", risk_preference: 5, age: 23)
    expect(@s.uid).to eq("Name")
    expect(@s.handle).to eq("handle")
    expect(@s.risk_preference).to eq(5)
    expect(@s.age).to eq(23)
  end
end