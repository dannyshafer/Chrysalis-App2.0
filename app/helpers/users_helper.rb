Module UsersHelper
  def age_allocation(age)
    ages = {
    20 => {"high" => 7, "medium" => 2, "low" => 1},
    25 => {"high" => 6, "medium" => 2, "low" => 2},
    30 => {"high" => 6, "medium" => 1, "low" => 3},
    35 => {"high" => 5, "medium" => 3, "low" => 2},
    40 => {"high" => 5, "medium" => 2, "low" => 3},
    45 => {"high" => 4, "medium" => 4, "low" => 2},
    50 => {"high" => 4, "medium" => 4, "low" => 2},
    55 => {"high" => 3, "medium" => 4, "low" => 3},
    60 => {"high" => 3, "medium" => 3, "low" => 4},
    65 => {"high" => 2, "medium" => 2, "low" => 6},
    70 => {"high" => 2, "medium" => 1, "low" => 7}
  }

  end
end