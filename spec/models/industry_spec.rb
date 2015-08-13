require 'spec_helper'

describe Industry do
  it 'should create an instance of an industry' do
    s = Industry.create(name: "Space", eps: 4.4, pe: 5.56)
    expect(s.name).to eq("Space")
    expect(s.eps).to eq(4.4)
    expect(s.pe).to eq(5.56)
  end
end