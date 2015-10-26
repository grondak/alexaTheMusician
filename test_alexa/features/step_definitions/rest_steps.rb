
When /^the client requests GET (.*)$/ do |path|
  @response = RestClient.get(path)
end

Then /^response should be JSON:$/ do |json|
  JSON.parse(@response).should == JSON.parse(json)
end

Then /^response should be "([^"]*)"$/ do |status|
    @response.code.should == status.to_i
end
Then /^the JSON response should be an array with (\d+) "([^"]*)" elements$/ do |num, name|
                                                            page = JSON.parse(@response)
                                                            page.map { |d| d[name] }.length.should == num.to_i
                                                          end