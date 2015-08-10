

module IndustriesHelper
  def industries_runner
    if !Industry.find_by(id: 1)
      make_dict
    end
    make_industry_averages
    @industries = Industry.where.not(pe: nil)
  end

  def make_industry_averages
    Industry.all.each do |ind|
      ind.update_attributes(
        eps: Stock.where(industry: ind.name).average(:eps),
        pe: Stock.where(industry: ind.name).average(:pe),
        pbook: Stock.where(industry: ind.name).average(:pbook),
        psales: Stock.where(industry: ind.name).average(:psales),
        markcap: Stock.where(industry: ind.name).average(:markcap),
        peg: Stock.where(industry: ind.name).average(:peg),
        book_value: Stock.where(industry: ind.name).average(:book_value),
        shares: Stock.where(industry: ind.name).average(:shares),
        graham_number: Stock.where(industry: ind.name).average(:graham_number)

        )
    end
  end

  def make_dict
    industries = ["Accident & Health Insurance", "Advertising Agencies", "Aerospace/Defense - Major Diversified", "Aerospace/Defense Products & Services", "Agricultural Chemicals", "Air Delivery & Freight Services", "Air Services, Other", "Aluminum", "Apparel Stores", "Appliances", "Application Software", "Asset Management", "Auto Dealerships", "Auto Manufacturers - Major", "Auto Parts", "Auto Parts Stores", "Auto Parts Wholesale", "Basic Materials Wholesale", "Beverages - Brewers", "Beverages - Soft Drinks", "Beverages - Wineries & Distillers", "Biotechnology", "Broadcasting - Radio", "Broadcasting - TV", "Building Materials Wholesale", "Business Equipment", "Business Services", "Business Software & Services", "Catalog & Mail Order Houses", "CATV Systems", "Cement", "Chemicals - Major Diversified", "Cigarettes", "Cleaning Products", "Closed-End Fund - Debt", "Closed-End Fund - Equity", "Closed-End Fund - Foreign", "Communication Equipment", "Computer Based Systems", "Computer Peripherals", "Computers Wholesale", "Confectioners", "Conglomerates", "Consumer Services", "Copper", "Credit Services", "Dairy Products", "Data Storage Devices", "Department Stores", "Diagnostic Substances", "Discount, Variety Stores", "Diversified Communication Services", "Diversified Computer Systems", "Diversified Electronics", "Diversified Investments", "Diversified Machinery", "Diversified Utilities", "Drug Delivery", "Drug Manufacturers - Major", "Drug Manufacturers - Other", "Drug Related Products", "Drug Stores", "Drugs - Generic", "Drugs Wholesale", "Education & Training Services", "Electric Utilities", "Electronic Equipment", "Electronics Stores", "Electronics Wholesale", "Entertainment - Diversified", "Exchange Traded Fund", "Farm & Construction Machinery", "Farm Products", "Food - Major Diversified", "Food Wholesale", "Foreign Regional Banks", "Gaming Activities", "Gas Utilities", "General Building Materials", "General Contractors", "General Entertainment", "Gold", "Grocery Stores", "Health Care Plans", "Healthcare Information Services", "Heavy Construction", "Home Furnishing Stores", "Home Furnishings & Fixtures", "Home Health Care", "Home Improvement Stores", "Hospitals", "Housewares & Accessories", "Independent Oil & Gas", "Industrial Electrical Equipment", "Industrial Equipment & Components", "Industrial Equipment Wholesale", "Industrial Metals & Minerals", "Information & Delivery Services", "Information Technology Services", "Insurance Brokers", "Internet Information Providers", "Internet Service Providers", "Internet Software & Services", "Investment Brokerage - National", "Investment Brokerage - Regional", "Jewelry Stores", "Life Insurance", "Lodging", "Long Distance Carriers", "Long-Term Care Facilities", "Lumber, Wood Production", "Machine Tools & Accessories", "Major Airlines", "Major Integrated Oil & Gas", "Management Services", "Manufactured Housing", "Marketing Services", "Meat Products", "Medical Appliances & Equipment", "Medical Equipment Wholesale", "Medical Instruments & Supplies", "Medical Laboratories & Research", "Medical Practitioners", "Metal Fabrication", "Money Center Banks", "Mortgage Investment", "Movie Production, Theaters", "Multimedia & Graphics Software", "Music & Video Stores", "Networking & Communication Devices", "Nonmetallic Mineral Mining", "Office Supplies", "Oil & Gas Drilling & Exploration", "Oil & Gas Equipment & Services", "Oil & Gas Pipelines", "Oil & Gas Refining & Marketing", "Packaging & Containers", "Paper & Paper Products", "Personal Computers", "Personal Products", "Personal Services", "Photographic Equipment & Supplies", "Pollution & Treatment Controls", "Printed Circuit Boards", "Processed & Packaged Goods", "Processing Systems & Products", "Property & Casualty Insurance", "Property Management", "Publishing - Books", "Publishing - Newspapers", "Publishing - Periodicals", "Railroads", "Real Estate Development", "Recreational Goods, Other", "Recreational Vehicles", "Regional - Mid-Atlantic Banks", "Regional - Midwest Banks", "Regional - Northeast Banks", "Regional - Pacific Banks", "Regional - Southeast Banks", "Regional - Southwest  Banks", "Regional Airlines", "REIT - Diversified", "REIT - Healthcare Facilities", "REIT - Hotel/Motel", "REIT - Industrial", "REIT - Office", "REIT - Residential", "REIT - Retail", "Rental & Leasing Services", "Research Services", "Residential Construction", "Resorts & Casinos", "Restaurants", "Rubber & Plastics", "Savings & Loans", "Scientific & Technical Instruments", "Security & Protection Services", "Security Software & Services", "Semiconductor - Broad Line", "Semiconductor - Integrated Circuits", "Semiconductor - Specialized", "Semiconductor Equipment & Materials", "Semiconductor- Memory Chips", "Shipping", "Silver", "Small Tools & Accessories", "Specialized Health Services", "Specialty Chemicals", "Specialty Eateries", "Specialty Retail, Other", "Sporting Activities", "Sporting Goods", "Sporting Goods Stores", "Staffing & Outsourcing Services", "Steel & Iron", "Surety & Title Insurance", "Synthetics", "Technical & System Software", "Technical Services", "Telecom Services - Domestic", "Telecom Services - Foreign", "Textile - Apparel Clothing", "Textile - Apparel Footwear & Accessories", "Textile Industrial", "Tobacco Products, Other", "Toy & Hobby Stores", "Toys & Games", "Trucking", "Trucks & Other Vehicles", "Waste Management", "Water Utilities", "Wholesale, Other", "Wireless Communications"]

    industries.each do |name|
      Industry.create(name: name)
    end
  end
end